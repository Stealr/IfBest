import React from 'react';
import './card_video.scss';


export const CardVideo = () => {
    return (
        <div className="card">
            <img src="SRC!" alt="title" className="thumbnail" />
            <div className="content">
                <div className="avatar"></div>
                <div>
                    <div className="title title1-medium">
                        Название видео какое-то интересное, на три строки и более
                    </div>
                    <div className="channel">Название канала</div>
                    <div className="meta">
                        ЧИСЛО просмотров • ВРЕМЯ назад
                    </div>
                </div>
            </div>
        </div>
    );
};
