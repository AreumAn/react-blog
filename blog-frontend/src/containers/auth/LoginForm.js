import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { useEffect } from 'react';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({ form: auth.login }));

    // Change input
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    // Submit form 
    const onSubmit = e => {
        e.preventDefault();
        // TODO
    };

    // To prevent staying values in login form,
    // when user went back to `login` after login and moved other page.
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default LoginForm;

