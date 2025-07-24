import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';
import './sm_art_card.scss';

function SmArtCard({ data }) {
    return (
        <div className="sa-card">
            <div className='sa-card__thumb'>
                <img src={data.image} alt={'thumb'} />
            </div>

            <div className='sa-card__body'>
                <p className='sa-card__title headline3-small-f'>{data.title}</p>
                <p className='sa-card__author body-small-f'>{data.author}</p>
                <p className='sa-card__date body-small-f'>{data.date}</p>
            </div>

            <div className='sa-card__menu'>
                <EllipsisBtn />
            </div>
        </div>
    );
}

export default SmArtCard;
