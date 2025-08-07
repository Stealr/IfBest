import './input.scss';

function Input({ label, register, validationRules = {}, ...rest }) {
    return (
        <input {...register(label, validationRules)} className="input input-small-f" {...rest} />
    );
}

export default Input;
