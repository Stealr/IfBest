import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Provider({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Внутрь добавлять провайдеры */}
        {/* <AuthProvider> */}
        {children}
        {/* </AuthProvider> */}
      </QueryClientProvider>
    </>
  );
}

export default Provider;
