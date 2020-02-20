import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Page/Main';
import Posts from './Page/Posts';
import Post from './Page/Post';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Footer from './Layout/Footer';
import AuthRouters from './AuthRouters';

const NotFound = () => <div>404</div>;

const routes = [
    {
        id: 'main',
        name: '메인',
        path: '/',
        component: Main,
    },
    {
        id: 'posts',
        name: '목록',
        path: '/posts',
        component: Posts,
    },
    {
        id: 'create',
        name: '쓰기',
        path: '/create',
        component: Post,
    },
    {
        id: 'view',
        name: '상세',
        path: '/post/:postId',
        component: Post,
    },
    {
        id: 'edit',
        name: '수정',
        path: '/post/:postId/edit',
        component: Post,
    },
];

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Navigation />
                <Switch>
                    {routes.map(({ id, path, component }) => {
                        return (
                            <AuthRouters
                                exact
                                key={id}
                                id={id}
                                path={path}
                                component={component}
                            />
                        );
                    })}
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
