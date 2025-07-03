import { RouterProvider } from 'react-router-dom';
import Provider from './Provider.jsx';
import { router } from './router.jsx';
import { PopupProvider } from '@stores/popUpContext.jsx';

function App() {
    return (
        <Provider>
            <PopupProvider>
                <RouterProvider router={router} />
            </PopupProvider>
        </Provider>
    );
}

export default App;
