import logo from '@assets/images/ellipsis.png';

const CardAudio = () => {
  return (
    <li className="card card--audio">
      <div className="card__img"></div>
      <div className="card__bottom">
        <div className="card__bottom-left">
            <p className="card__title">Название трека</p>
            <span className="card__info">Автор</span>
        </div>
        <img className="card__icon" src={logo} width={22} height={22} alt="Logo" />
      </div>
    </li>
  );
};

export default CardAudio;
