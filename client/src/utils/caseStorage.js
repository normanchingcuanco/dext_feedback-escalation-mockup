import mockCases from "../data/mockCases";

const CREATED_CASES_KEY = "created-cases";

function readCreatedCases() {
  const storedValue = localStorage.getItem(CREATED_CASES_KEY);

  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (error) {
    return [];
  }
}

export function getAllCases() {
  const createdCases = readCreatedCases();
  const combinedCases = [...mockCases, ...createdCases];

  return combinedCases.map((item) => {
    const storedStatus = localStorage.getItem(`case-status-${item.id}`);
    const storedDocumentation = localStorage.getItem(
      `case-documentation-${item.id}`
    );

    let documentation = null;

    if (storedDocumentation) {
      try {
        documentation = JSON.parse(storedDocumentation);
      } catch (error) {
        documentation = null;
      }
    }

    return {
      ...item,
      status: storedStatus || item.status,
      documentation,
    };
  });
}

export function getCaseById(caseId) {
  return getAllCases().find((item) => item.id === caseId);
}

export function createMockCase(caseData) {
  const existingCases = readCreatedCases();
  const updatedCases = [...existingCases, caseData];

  localStorage.setItem(CREATED_CASES_KEY, JSON.stringify(updatedCases));
}