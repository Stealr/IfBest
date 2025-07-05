import VideocamIcon from '@assets/svg/popapsContent/createContentPopup/videocam.svg?react';
import ArticleIcon from '@assets/svg/popapsContent/createContentPopup/article.svg?react';
import MusicNoteIcon from '@assets/svg/popapsContent/createContentPopup/music_note.svg?react';
import './create.scss';

const CreateContentPopup = () => {
    return (
        <div className="create-content-popup title1-medium">
            <div className="create-content-popup__item">
                <VideocamIcon className="create-content-popup__icon"/>
                Добавить видео
            </div>
            <div className="create-content-popup__item">
                <ArticleIcon className="create-content-popup__icon"/>
                Добавить статью
            </div>
            <div className="create-content-popup__item">
                <MusicNoteIcon className="create-content-popup__icon"/>
                Загрузить аудио
            </div>
        </div>
    );
};

export default CreateContentPopup;
