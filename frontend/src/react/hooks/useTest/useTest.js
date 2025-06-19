import { useQuery } from '@tanstack/react-query';
import { fetchTestData } from '@services/api/testApi/test';

export const useTest = () => {
    return useQuery({
        queryKey: ['test'],
        queryFn: fetchTestData,
        
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        // retry: 1,
    });
};
