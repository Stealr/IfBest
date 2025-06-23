const API_HOST = import.meta.env.VITE_API_MAIN;

export const ENDPOINTS = {
    test: {
        getTest: `${API_HOST}/fact`,
        createTest: `${API_HOST}/test2`,
    },
    auth: {
        login: `${API_HOST}/login`,
        register: `${API_HOST}/register`,
        logout: `${API_HOST}/logout`,
        refresh_token: `${API_HOST}/refresh_token`,
        check_auth_status: `${API_HOST}/check_auth_status`,
    },
    // ...
    // test2: {
    //   ...
    // }
};
