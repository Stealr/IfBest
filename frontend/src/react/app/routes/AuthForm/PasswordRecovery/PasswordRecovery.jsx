import { useForm } from 'react-hook-form';
import AuthBox from '../components/AuthBox/AuthBox';
import AuthBtn from '@components/inputs/AuthBtn/AuthBtn';
import Input from '@components/inputs/Input/Input';

function PasswordRecovery() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="password-recovery">
            <AuthBox
                title={'Забыли пароль?'}
                info={'Отправим вам на почту ссылку для сброса пароля'}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label={'email'}
                        placeholder={'Электронная почта'}
                        register={register}
                        validationRules={{
                            required: 'Поле не должно быть пустым',
                        }}
                    />
                    <div style={{ marginTop: '0.8rem' }}>
                        <AuthBtn type={'full-width'}>Отправить</AuthBtn>
                    </div>
                </form>
            </AuthBox>
        </div>
    );
}

export default PasswordRecovery;
