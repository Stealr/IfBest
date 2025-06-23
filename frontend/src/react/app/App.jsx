import { RouterProvider } from 'react-router-dom';
import Provider from './Provider.jsx';
import { router } from './router.jsx';
import SideBar from '@components/ui/SideBar/SideBar';

function App() {
  return (
    <Provider>
      <SideBar />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
