import { useForm } from 'react-hook-form';
import AuthBox from '../components/AuthBox/AuthBox';
import AuthBtn from '@components/inputs/AuthBtn/AuthBtn';
import Input from '@components/inputs/Input/Input';

function PasswordReset() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="password-recovery">
            <AuthBox title={'Смена пароля'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label={'password'}
                        placeholder={'Пароль'}
                        register={register}
                        validationRules={{
                            required: 'Поле не должно быть пустым',
                        }}
                        type={'password'}
                    />
                    <Input
                        label={'confirm-password'}
                        placeholder={'Повторите пароль'}
                        register={register}
                        validationRules={{
                            required: 'Поле не должно быть пустым',
                        }}
                        type={'password'}
                    />
                    <div style={{ marginTop: '0.8rem' }}>
                        <AuthBtn type={'full-width'}>Сохранить</AuthBtn>
                    </div>
                </form>
            </AuthBox>
        </div>
    );
}

export default PasswordReset;
