import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '@components/containers/Layout/Layout.jsx';

const MediaLayout = lazy(() => import('./layouts/MediaLayout/MediaLayout'));
const HomePage = lazy(() => import('./routes/Home/Home'));
const NotFound = lazy(() => import('./routes/NotFound/NotFound'));

//! Возможно в будующем возникнет проблема микро загрузок, так как компонент сначала отрисовывается
//! А только затем используется хук для получения данных. В следствии появится загрузка на мгновение
//! Надо будет посмотреть насколко велика проблема и переписать роутер на предзагрузку данных через loaders

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Layout это обертка с header и sidebar
        children: [
            // {
            //     index: true,
            //     element: <HomePage />,
            // },

            {
                path: '',
                element: <MediaLayout />, // MediaLayout содержит список тегов
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    // {
                    //     path: 'videos',
                    //     element: <VideoPage />,
                    // },
                    // {
                    //     path: 'articles',
                    //     element: <ArticlePage />,
                    // },
                    // {
                    //     path: 'audios',
                    //     element: <AudioPage />,
                    // },
                ],
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
