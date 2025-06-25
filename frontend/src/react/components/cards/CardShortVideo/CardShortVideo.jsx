import logo from '@assets/images/ellipsis.png';
import './card-short-video.scss'

const CardShortVideo = () => {
  return (
    <li className="card-short-video">
      <div className="card-short-video__img"></div>
      <div className="card-short-video__bottom">
        <div className="card-short-video__bottom-left">
            <p className="card-short-video__title">Название видео какое-то...</p>
            <span className="card-short-video__info">600 просмотров</span>
        </div>
        <img className="card-short-video__icon" src={logo} width={22} height={22} alt="Logo" />
      </div>
    </li>
  );
};

export default CardShortVideo;
