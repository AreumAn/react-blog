import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({ 
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user 
    }));

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
        const { username, password } = form;
        dispatch(login({ username, password }));
    };

    // To prevent staying values in login form,
    // when user went back to `login` after login and moved other page.
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            console.log('Error!!');
            console.log(authError);
            setError('Fail to login');
            return;
        }
        if(auth) {
            console.log('login success');
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
        <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
    );
};

export default withRouter(LoginForm);

