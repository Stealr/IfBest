import NotificationItem from './NotificationItem';
import './notifications.scss';
import SettingsIcon from '@assets/svg/settings.svg?react';

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
    {
        id: 5,
        text: 'Какое-то очень ',
        time: '1 месяц назад',
    },
    {
        id: 6,
        text: 'Какое-то очень ',
        time: '1 месяц назад',
    },
    {
        id: 7,
        text: 'Какое-то очень ',
        time: '1 месяц назад',
    },
];

const NotificationsContent = () => {
    return (
        <div className="notifications">
            <div className="notifications__header headline2-medium-f">
                <h3>Уведомления</h3>
                <SettingsIcon className='icon' style={{ cursor: 'pointer' }} />
            </div>
            <div className="notifications__list">
                {mockData.map((item) => (
                    <NotificationItem key={`notifItem${item.id}`} text={item.text} time={item.time} />
                ))}
            </div>
        </div>
    );
};

export default NotificationsContent;
