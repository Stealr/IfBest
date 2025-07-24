import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';
import Avatar from '@components/lib/Avatar/Avatar';
import './card_video.scss';

export const CardVideo = () => {
    return (
        <div className="card-video">
            <img src="SRC!" alt="title" className="card-video__thumbnail" />
            <div className="card-video__content">
                <div className="card-video__avatar">
                    <Avatar image={null} size={4.8} />
                </div>
                <div>
                    <div className="card-video__title headline3-small-f">
                        Название видео какое-то интересное, на три строки и более. Название видео
                        какое-то интересное, на три строки и более. Название видео какое-то
                        интересное, на три строки и более. Название видео какое-то интересное, на
                        три строки и более
                    </div>
                    <div className="card-video__channel body-small-f">Название канала</div>
                    <div className="card-video__meta body-small-f">
                        ЧИСЛО просмотров • ВРЕМЯ назад
                    </div>
                </div>
                <EllipsisBtn />
            </div>
        </div>
    );
};
