import "./notifications.scss"
import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';

const NotificationItem = ({ text, time }) => {
  return (
    <div className="notifications__item">
      <img src={'src'} className="notifications__avatar"/> 
      <div className="notifications__content">
        <div className="notifications__text headline3-small-f">{text}</div>
        <div className="notifications__time body-small-f">{time}</div>
      </div>
      <img src={'src'} className="notifications__thumbnail" />
      <EllipsisBtn/>
    </div>
  );
};

export default NotificationItem;
