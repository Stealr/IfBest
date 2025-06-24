import logo from '@assets/images/ellipsis.png';
import './card-audio.scss'

const CardAudio = () => {
  return (
    <li className="card-audio">
      <div className="card-audio__img"></div>
      <div className="card-audio__bottom">
        <div className="card-audio__bottom-left">
            <p className="card-audio__title">Название трека</p>
            <span className="card-audio__info">Автор</span>
        </div>
        <img className="card-audio__icon" src={logo} width={22} height={22} alt="Logo" />
      </div>
    </li>
  );
};

export default CardAudio;
