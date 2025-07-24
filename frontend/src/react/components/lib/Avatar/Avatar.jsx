import './avatar.scss';

/**
 * Description
 * @param {any} image
 * @param {number} size 'пример 4.8'
 */
function Avatar({ image, size }) {
    return (
        <div className="avatar" style={{ width: `${size}rem`, height: `${size}rem` }}>
            <img src={image} alt="avatar" />
        </div>
    );
}

export default Avatar;
