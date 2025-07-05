import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PopupProvider } from '../stores/popUpContext';

const queryClient = new QueryClient();

function Provider({ children }) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                {/* Внутрь добавлять провайдеры */}
                {/* <AuthProvider> */}
                <PopupProvider>
                  {children}
                </PopupProvider>
                {/* </AuthProvider> */}
            </QueryClientProvider>
        </>
    );
}

export default Provider;
