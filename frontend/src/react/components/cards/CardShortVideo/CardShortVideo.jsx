import logo from '@assets/images/ellipsis.png';

const CardShortVideo = () => {
  return (
    <li className="card">
      <div className="card__img"></div>
      <div className="card__bottom">
        <div className="card__bottom-left">
            <p className="card__title">Название видео какое-то...</p>
            <span className="card__info">600 просмотров</span>
        </div>
        <img className="card__icon" src={logo} width={22} height={22} alt="Logo" />
      </div>
    </li>
  );
};

export default CardShortVideo;
