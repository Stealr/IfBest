import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PopupProvider } from '../stores/popUpContext';

const queryClient = new QueryClient();

function Provider() {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <AuthProvider> */}
            <PopupProvider>
                <Outlet />
            </PopupProvider>
            {/* </AuthProvider> */}
        </QueryClientProvider>
    );
}

export default Provider;
