const fakeGeneratedText = {
  understand:
    "The solution will have two main components. A dashboard and a learning language model. Other components include a database and an API.",
  refine:
    "Dashboard\nlogin/registration, navigation menu, canvas, profile settings\n\nLLM\nlocal LLM selection, hosting requirements, training requirements, additional data requirements\n\nDatabase\nschemas, relational data model, primary/foreign keys\n\nAPI\nroutes, controllers, models, middleware, initialisation",
  explore:
    "Components\nDashboard\nUI/UX Build, Measure & Learn iteration\n\nLLM\nlocal LLM selected, beta testing, training data set",
  create:
    "Components\nDashboard\nDashboard MVP, API LLM assistant\n\nLLM\nLLM MVP, API to dashboard",
  action:
    "Documents\nMVP\nAction Plan\nSOP\nTransfer Plan\nEngagement Plan\nReturn to Model\n\nAction Statement:\nBy October, we would have created an MVP for Defence and their partners that provides an AI-assisted digital platform for problem solving.",
};

export const generateText = (eventType) => {
  return fakeGeneratedText[eventType];
};
