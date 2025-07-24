import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';
import './card-short-video.scss'

const CardShortVideo = () => {
  return (
    <li className="card-short-video">
      <div className="card-short-video__img"></div>
      <div className="card-short-video__bottom">
        <div className="card-short-video__bottom-left">
            <p className="card-short-video__title headline3-small-f">Название видео какое-то длинное. Название видео какое-то длинное. Название видео какое-то длинное</p>
            <span className="card-short-video__info body-small-f">600 просмотров</span>
        </div>
        <EllipsisBtn />
      </div>
    </li>
  );
};

export default CardShortVideo;
