import "./notifications.scss"
import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';

const NotificationItem = ({ text, time }) => {
  return (
    <div className="notifications__item">
      <img src={'src'} className="notifications__avatar"/> 
      <div className="notifications__content">
        <div className="notifications__text title1-medium">{text}</div>
        <div className="notifications__time title1-small">{time}</div>
      </div>
      <img src={'src'} className="notifications__thumbnail" />
      <EllipsisBtn/>
    </div>
  );
};

export default NotificationItem;
