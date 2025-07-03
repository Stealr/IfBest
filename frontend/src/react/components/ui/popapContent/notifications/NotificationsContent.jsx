import NotificationItem from './NotificationItem';
import "./notifications.scss"
// import { ReactComponent as SettingsIcon } from '@assets/svg/settings.svg';

const mockData = [
  {
    id: 1,
    text: 'Какое-то очень интересное уведомление.. Какое-то очень интересное уведомление..',
    time: '1 месяц назад',
  },
  {
    id: 2,
    text: 'Какое-то очень интересное уведомление..',
    time: '1 месяц назад',
  },
  {
    id: 3,
    text: 'Какое-то очень интересное уведомление.. Какое-то очень интересное уведомление..',
    time: '1 месяц назад',
  },
  {
    id: 4,
    text: 'Какое-то очень ',
    time: '1 месяц назад',
  },
];

const NotificationsContent = () => {
  return (
    <div className="notifications">
      <div className="notifications__header headline2">
        <h3>Уведомления</h3>
        <> Settings </>
      </div>
      <div className="notifications__list title1-small">
        {mockData.map((item) => (
          <NotificationItem key={item.id} text={item.text} time={item.time} />
        ))}
      </div>
    </div>
  );
};

export default NotificationsContent
;
