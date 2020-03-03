import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { useEffect } from 'react';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({ form: auth.register }));

    // Change input
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
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

    // To prevent staying values in register form,
    // when user went back to `register` after register and moved other page.
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default RegisterForm;

