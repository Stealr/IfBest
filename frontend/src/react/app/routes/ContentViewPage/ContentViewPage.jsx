import { lazy } from 'react';

const ArticleView = lazy(() => import('./components/views/ArticleView/ArticleView.jsx'));
const VideoView = lazy(() => import('./components/views/VideoView/VideoView.jsx'));
const AudioView = lazy(() => import('./components/views/AudioView/AudioView.jsx'));

function ContentViewPage() {
    return <ArticleView />;
}

export default ContentViewPage;
