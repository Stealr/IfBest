import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthBox from '../components/AuthBox/AuthBox';
import AuthBtn from '@components/inputs/AuthBtn/AuthBtn';
import Input from '@components/inputs/Input/Input';
import Checkbox from '@components/inputs/Checkbox/Checkbox';

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="register">
            <AuthBox title={'Регистрация'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label={'name'}
                        placeholder={'Имя пользователя'}
                        register={register}
                        validationRules={{
                            required: 'Поле не должно быть пустым',
                        }}
                    />
                    <Input
                        label={'email'}
                        placeholder={'Электронная почта'}
                        register={register}
                        validationRules={{
                            required: 'Поле не должно быть пустым',
                        }}
                    />
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
                        label={'conf_password'}
                        placeholder={'Подтверждение пароля'}
                        register={register}
                        validationRules={{
                            required: 'Поле не должно быть пустым',
                        }}
                        type={'password'}
                    />
                    <Checkbox
                        label="terms"
                        register={register}
                        validationRules={{
                            required: 'Необходимо согласие с условиями',
                        }}
                    >
                        Согласен на обработку {<Link to={'test'}>персональных данных</Link>} и с{' '}
                        {<Link to={'test'}> пользовательским соглашением</Link>}
                    </Checkbox>
                    <div style={{ marginTop: '0.8rem' }}>
                        <AuthBtn type={'full-width'}>Регистрация</AuthBtn>
                    </div>
                </form>
            </AuthBox>
        </div>
    );
}

export default Register;
