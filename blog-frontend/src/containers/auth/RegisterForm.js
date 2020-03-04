import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { useEffect } from 'react';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({ 
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user 
    }));

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
        const { username, password, passwordConfirm } = form;
        if(password !== passwordConfirm) {
            // Error
            return;
        }
        dispatch(register({ username, password }))
    };

    // To prevent staying values in register form,
    // when user went back to `register` after register and moved other page.
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            console.log('Error!!');
            console.log(authError);
            return;
        }
        if(auth) {
            console.log('Success');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            history.push('/');
        }
    }, [history, user]);


    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default withRouter(RegisterForm);

