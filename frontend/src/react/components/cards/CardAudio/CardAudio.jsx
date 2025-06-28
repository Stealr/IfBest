import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';
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
        <EllipsisBtn />
      </div>
    </li>
  );
};

export default CardAudio;
