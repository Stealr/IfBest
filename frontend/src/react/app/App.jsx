import { RouterProvider } from 'react-router-dom';
import Provider from './Provider.jsx';
import { router } from './router.jsx';

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
