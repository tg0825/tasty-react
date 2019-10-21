import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router, 
    Route,
    Switch
} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

import Posts from 'Comp/Posts';
import SinglePostRedux from 'Comp/SinglePostRedux';
import Create from 'Comp/Create';
import {Header, Navigation} from 'Comp/Layout/Layout';

const NotFound = () => (
    <div>404</div>
);

class App extends React.Component {
    render () {
        return (
            <Router>
                <Header/>
                <Navigation/>
                <Switch>
                    <Route key="main" exact path="/" render={props=><Posts {...props}/>} />
                    <Route key="view" exact path="/post/:postId" render={props => <SinglePostRedux {...props}/>} />
                    <Route key="edit" exact path="/post/:postId/edit" render={props => <SinglePostRedux {...props} edit/>} />
                    <Route key="create" exact path="/create" render={props => <Create {...props}/>} />
                    
                    {/*<Route exact path="/edit/:postId" render={ (props) => {
                            let idPost = props.location.pathname.replace('/edit/', '');
                            const posts=this.state.posts;
                            let filter;
                            filter = posts.filter(post => (
                                post.id === Number(idPost)
                            ));                                
                            return(
                                <Form
                                    post={filter[0]} 
                                    editPost={this.editPost}
                                    />
                            );
                        }} />
                        */}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);