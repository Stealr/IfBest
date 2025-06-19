import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '@components/containers/layout/Layout.jsx';

const HomePage = lazy(() => import('./routes/Home/Home'));
const NotFound = lazy(() => import('./routes/NotFound/NotFound'));

//! Возможно в будующем возникнет проблема микро загрузок, так как компонент сначала отрисовывается
//! А только затем используется хук для получения данных. В следствии появится загрузка на мгновение
//! Надо будет посмотреть насколко велика проблема и переписать роутер на предзагрузку данных через loaders

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout это обертка с header и footer
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      // {
      //   path: '/route',
      //   element: <Page />,
      // },

      {
        path: '*', // 404 route
        element: <NotFound />,
      },
    ],
  },
]);
