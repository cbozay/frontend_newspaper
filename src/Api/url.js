const apiKey = "&apiKey=676f017549224f488970f1835f9db971";
const childUrl = "top-headlines?country=tr&category=";

export const url = {
  home: `top-headlines?country=tr${apiKey}`,
  business: `${childUrl}business${apiKey}`,

  entertainment: `${childUrl}entertainment${apiKey}`,

  general: `${childUrl}general${apiKey}`,

  health: `${childUrl}health${apiKey}`,

  science: `${childUrl}science${apiKey}`,

  sports: `${childUrl}sports${apiKey}`,

  technology: `${childUrl}technology${apiKey}`,
};
