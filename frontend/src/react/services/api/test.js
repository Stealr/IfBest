// testService.js
import apiClient from '@services/apiClient';
import { ENDPOINTS } from '@services/apiConfig';

export async function fetchTestData() {
    const response = await apiClient.get(ENDPOINTS.test.getTest);
    // console.log(response);
    return response.data;
}
