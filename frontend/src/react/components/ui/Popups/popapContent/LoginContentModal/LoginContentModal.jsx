import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import usePopup from '@hooks/usePopup';

import Checkbox from '@components/inputs/Checkbox/Checkbox';
import AuthBtn from '@components/inputs/AuthBtn/AuthBtn';
import Input from '@components/inputs/Input/Input';

import CloseIcon from '@assets/svg/close.svg?react';

import './login_content.scss';

function LoginContentModal() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { closePopup } = usePopup();
    const navigate = useNavigate();

    const onSubmit = (data) => console.log(data);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="login-content">
            <button onClick={closePopup} className="login-content__close-btn">
                <CloseIcon className={'icon'} />
            </button>
            <h2 className="login-content__title headline2-medium-f">Вход</h2>
            <form className="login-content__form" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    variant={'loginModalV'}
                    label={'email'}
                    placeholder={'Электронная почта'}
                    register={register}
                    validationRules={{
                        required: 'Поле не должно быть пустым',
                    }}
                />
                <Input
                    variant={'loginModalV'}
                    label={'password'}
                    placeholder={'Пароль'}
                    register={register}
                    validationRules={{
                        required: 'Поле не должно быть пустым',
                    }}
                    type={'password'}
                />
                <Checkbox label="terms" register={register}>
                    Запомнить
                </Checkbox>

                <div className="login-content__btns">
                    <AuthBtn
                        onClick={() => handleNavigate('signup')}
                        size="full-width"
                        color="grey"
                        type={'button'}
                    >
                        Регистрация
                    </AuthBtn>
                    <AuthBtn size="full-width" color="red" type={'submit'}>
                        Войти
                    </AuthBtn>
                </div>
            </form>
            <div className="login-content__forget-pass input-small-f">
                <Link to={'password_recovery'} >Забыли пароль?</Link>
            </div>
        </div>
    );
}

export default LoginContentModal;
