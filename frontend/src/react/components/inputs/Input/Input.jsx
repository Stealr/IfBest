import clsx from 'clsx';
import './input.scss';

/**
 * Description - текстовое поле для форм
 * @param {string} variant 'вариация стилизации: loginModalV | commonV'
 * @param {string} label
 * @param {any} register
 * @param {object} validationRules={}
 * @param {any} ...rest
 */
function Input({ variant, label, register, validationRules = {}, ...rest }) {
    const inputClasses = clsx(
        'input',
        'input-small-f',
        variant && `input--variant-${variant}`,
    );

    return (
        <input
            {...register(label, validationRules)}
            className={inputClasses}
            {...rest}
        />
    );
}

export default Input;
