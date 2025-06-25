import './card_video.scss';

export const CardVideo = () => {
    return (
        <div className="card-video">
            <img src="SRC!" alt="title" className="card-video__thumbnail" />
            <div className="card-video__content">
                <div className="card-video__avatar"></div>
                <div>
                    <div className="card-video__title title1-medium">
                        Название видео какое-то интересное, на три строки и более
                    </div>
                    <div className="card-video__channel title1-small">Название канала</div>
                    <div className="card-video__meta title1-small">
                        ЧИСЛО просмотров • ВРЕМЯ назад
                    </div>
                </div>
            </div>
        </div>
    );
};
