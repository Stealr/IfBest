import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';
import Avatar from '@components/lib/Avatar/Avatar';
import './lg_art_card.scss';

function LgArtCard({ data }) {
    return (
        <div className="la-card" style={{ backgroundImage: `url(${data.image})` }}>
            <div className="la-card__content">
                <div className="la-card__ellipsis">
                    <EllipsisBtn />
                </div>

                <p className="la-card__title headline2-medium-f">{data.title}</p>

                <div className='la-card__footer'>
                    <div className='la-card__meta'>
                        <div className='la-card__channel-block'>
                            <Avatar image={data.avatar} size={3.2}/>
                            <span className={`la-card__channel body-small-f`}>{data.author}</span>
                        </div>
                        <span className={`la-card__stats body-small-f`}>
                            {data.views} просмотров • {data.date}
                        </span>
                    </div>

                    <p className={`la-card__text body-large-f`}>{data.text}</p>
                </div>
            </div>
        </div>
    );
}

export default LgArtCard;
