import React from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Route } from 'react-router-dom';
import PostListpage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

function App() {
    return (
        <>
            <Route component={PostListpage} path={['/@:username', '/']} exact />
            <Route component={LoginPage} path={'/login'} />
            <Route component={RegisterPage} path={'/register'} />
            <Route component={WritePage} path={'/write'} />
            <Route component={PostPage} path={'/@:username/:postId'} />
            
        </>
    );
}

export default App;
