import CardAudio from '@components/cards/CardAudio/CardAudio';

const CardAudioList = () => {
  return (
    <ul className="card-list">
      {Array.from({ length: 5 }).map((_, i) => (
        <CardAudio key={i} />
      ))}
    </ul>
  );
};

export default CardAudioList;
