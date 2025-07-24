import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/MainLayout/MainLayout.jsx';

const MediaLayout = lazy(() => import('./layouts/MediaLayout/MediaLayout'));
const HomePage = lazy(() => import('./routes/Home/Home'));
const NotFound = lazy(() => import('./routes/NotFound/NotFound'));

//! Возможно в будующем возникнет проблема микро загрузок, так как компонент сначала отрисовывается
//! А только затем используется хук для получения данных. В следствии появится загрузка на мгновение
//! Надо будет посмотреть насколко велика проблема и переписать роутер на предзагрузку данных через loaders

export const router = createBrowserRouter([
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

            // {
            //     path: '/test',
            //     element: (
            //         <SmArtCard
            //             data={{
            //                 id: 1,
            //                 variant: 'featured',
            //                 // image: featuredImg,
            //                 title: 'Название видео какое‑то интересное, длинное, здоровское. Название видео какое‑то интересное, длинное, здоровское. Название видео какое‑то интересное, длинное, здоровское. Название видео какое‑то интересное, длинное, здоровское. Название видео какое‑то интересное, длинное, здоровское',
            //                 text: 'Lorem ipsum dolor sit amet consectetur. Scelerisque quam tristique fermentum in morbi. Sed odio in risus faucibus. Fames mauris enim aliquet vel massa metus. Enim molestie convallis euismod quam nisl sit maecenas. Fames mauris enim aliquet vel massa metus. Enim molestie convallis euismod quam. Lorem ipsum dolor sit amet consectetur. Scelerisque quam tristique fermentum in morbi. Sed odio in risus faucibus. Fames mauris enim aliquet vel massa metus. Enim molestie convallis euismod quam nisl sit maecenas. Fames mauris enim aliquet vel massa metus. Enim molestie convallis euismod quam...',
            //                 author: 'Название канала',
            //                 // avatar,
            //                 views: 600,
            //                 date: '1 месяц назад',
            //             }}
            //         />
            //     ),
            // },

            {
                path: '*', // 404 route
                element: <NotFound />,
            },
        ],
    },
]);
