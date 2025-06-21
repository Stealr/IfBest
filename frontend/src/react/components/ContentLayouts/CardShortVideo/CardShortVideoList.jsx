import CardShortVideo from '@components/cards/CardShortVideo/CardShortVideo';

const CardShortVideoList = () => {
  return (
    <ul className="card-list">
      {Array.from({ length: 5 }).map((_, i) => (
        <CardShortVideo key={i} />
      ))}
    </ul>
  );
};

export default CardShortVideoList;
