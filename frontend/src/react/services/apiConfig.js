const API_HOST = import.meta.env.VITE_API_MAIN;

export const ENDPOINTS = {
  test: {
    getTest: `${API_HOST}/fact`,
    createTest: `${API_HOST}/test2`,
  },
  
  // ...
  // test2: {
  //   ...
  // }
};
