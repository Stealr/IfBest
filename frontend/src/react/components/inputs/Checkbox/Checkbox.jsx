import './checkbox.scss';

function Checkbox({ label, register, validationRules, children }) {
    return (
        <label className="checkbox">
            <input type="checkbox" {...register(label, validationRules)} />
            <span className="checkbox__checkmark"></span>
            <span className="input-small-f">{children}</span>
        </label>
    );
}

export default Checkbox;
