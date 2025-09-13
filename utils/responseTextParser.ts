/** Package Imports */

/** Components/Utils/Styles/Types Imports */
import { FALLBACK_MARKER_TEXT, MARKER_TEXT } from "@/constants/appConstants";

interface SplitTextResult {
  quickExplanation: string;
  detailedExplanation: string;
}

export const parseRawProcessingText = (text: string): SplitTextResult => {
  if (!text) {
    const result: SplitTextResult = { quickExplanation: "", detailedExplanation: "" };
    return result;
  }

  const firstMarkerIndex = text.indexOf(MARKER_TEXT);

  if (firstMarkerIndex !== -1) {
    const result: SplitTextResult = {
      quickExplanation: text.slice(0, firstMarkerIndex).trim(),
      detailedExplanation: text.slice(firstMarkerIndex).trim(),
    };
    return result;
  }

  // Fallback: If no MARKER_TEXT found, treat all as intro
  const initialLines = text.includes(FALLBACK_MARKER_TEXT) ? text.split(FALLBACK_MARKER_TEXT)[0] : text;
  const result: SplitTextResult = { quickExplanation: initialLines.trim(), detailedExplanation: "" };
  return result;
};
