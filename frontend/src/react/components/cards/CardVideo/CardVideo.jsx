import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';
import './card_video.scss';

export const CardVideo = () => {
    return (
        <div className="card-video">
            <img src="SRC!" alt="title" className="card-video__thumbnail" />
            <div className="card-video__content">
                <img src="SRC!" className="card-video__content__avatar"/>
                <div>
                    <div className="card-video__content__title title1-medium">
                        Название видео какое-то интересное, на три строки и более
                    </div>
                    <div className="card-video__content__channel title1-small">Название канала</div>
                    <div className="card-video__content__meta title1-small">
                        ЧИСЛО просмотров • ВРЕМЯ назад
                    </div>
                </div>
                <EllipsisBtn />
            </div>
        </div>
    );
};
