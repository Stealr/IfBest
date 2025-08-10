import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Provider from './Provider.jsx';
import MainLayout from './layouts/MainLayout/MainLayout.jsx';
const MediaLayout = lazy(() => import('./layouts/MediaLayout/MediaLayout'));

const ContentViewPage = lazy(() => import('./routes/ContentViewPage/ContentViewPage'));

const Register = lazy(() => import('./routes/AuthForm/Register/Register'));
const PasswordRecovery = lazy(() => import('./routes/AuthForm/PasswordRecovery/PasswordRecovery'));
const PasswordReset = lazy(() => import('./routes/AuthForm/PasswordReset/PasswordReset'));

const HomePage = lazy(() => import('./routes/Home/Home'));

const NotFound = lazy(() => import('./routes/NotFound/NotFound'));

//! Возможно в будующем возникнет проблема микро загрузок, так как компонент сначала отрисовывается
//! А только затем используется хук для получения данных. В следствии появится загрузка на мгновение
//! Надо будет посмотреть насколко велика проблема и переписать роутер на предзагрузку данных через loaders

export const router = createBrowserRouter([
    {
        element: <Provider />,
        children: [
            {
                path: '/',
                element: <MainLayout />, // Layout это обертка с header и sidebar
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

                    {
                        path: 'content/test',
                        element: <ContentViewPage />,
                    },

                    {
                        path: 'signup',
                        element: <Register />,
                    },
                    {
                        path: 'password_recovery',
                        element: <PasswordRecovery />,
                    },
                    {
                        path: 'password_reset',
                        element: <PasswordReset />,
                    },

                    {
                        path: '*', // 404 route
                        element: <NotFound />,
                    },
                ],
            },
        ],
    },
]);
