/** Package Imports */

/** Components/Utils/Styles/Types Imports */

interface IncomingRequest { overview?: string; context?: string; objects?: string[]; explicitContent?: boolean; }

interface ProcessedResponse { quickOverview: string; detailedContext: string; isExplicitContent: boolean; objectsOrEntities: string[]; }

export const parseRawAnalysisJSON = (jsonResponse: IncomingRequest): ProcessedResponse => {
  if (!jsonResponse) {
    return { quickOverview: "", objectsOrEntities: [], detailedContext: "", isExplicitContent: false };
  }

  return {
    quickOverview: jsonResponse?.overview?.trim() ?? "",
    detailedContext: jsonResponse?.context?.trim() ?? "",
    isExplicitContent: jsonResponse?.explicitContent ?? false,
    objectsOrEntities: jsonResponse?.objects?.map((obj) => obj.trim()) ?? [],
  };
};
