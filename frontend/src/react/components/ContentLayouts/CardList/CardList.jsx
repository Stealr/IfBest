import CardShortVideo from '@components/cards/CardShortVideo/CardShortVideo';
import CardAudio from '@components/cards/CardAudio/CardAudio';
import './card-list.scss'

const CardList = ({ typeCard }) => {
  let CardComponent;

  if (typeCard === 'video') {
    CardComponent = CardShortVideo;
  } else if (typeCard === 'audio') {
    CardComponent = CardAudio;
  } else {
    console.warn('Unknown typeCard:', typeCard);
    return null;
  }

  return (
    <div className="card-list">
      {Array.from({ length: 5 }).map((_, i) => (
        <CardComponent key={i} />
      ))}
    </div>
  );
};

export default CardList;