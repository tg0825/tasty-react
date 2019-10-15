import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';
import axios from 'axios';
import {createLogger} from 'redux-logger';
import {
    BrowserRouter as Router, 
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';
import middleware from './middleware';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger, ReduxThunk));

const About = () => {
    return <div>about</div>;
}

const Users = () => {
    return <div>users</div>;
}

const NotFound = () => {
    return <div>404</div>
}

import {Header, Navigation} from './components/Layout/Layout';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import Form from './components/Form';

class App extends React.Component {
    state = {  
        posts: []
    }    
    
    componentDidMount() {
        this.getPost();
    }
    
    getPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then( res => {
            this.setState({
                posts: res.data
            }) 
        })
    }    
    
    deletePost = (id) => {
        //console.log(id);
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if (res.status === 200) {
                const posts = [...this.state.posts];
                let result = posts.filter(post => (
                    post.id !== id
                ));
                this.setState({
                    posts: result
                })
            } 
        })
    }    
    
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <Header/>
                    <Navigation/>
                    {/*<header>
                        <NavLink activeClassName="active" to="/">home</NavLink>
                        <NavLink activeClassName="active" to="/About">About</NavLink>
                        <NavLink activeClassName="active" to="/Users">Users</NavLink>
                    </header>
                    */}
                    <Switch>
                        <Route exact path="/" render={ () => {
                                return(
                                    <Posts 
                                        posts={this.state.posts}
                                        deletePost={this.deletePost}
                                        />
                                );
                            }} />
                            
                        <Route exact path="/post/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/post/', '')
                                
                                const posts=this.state.posts;
                                let filter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))
                                
                                
                                return(
                                    <SinglePost 
                                        post={filter[0]} 
                                        />
                                )
                            }} />            
                            
                        <Route exact path="/create" render={() => {
                                return(
                                    <Form 
                                        createPost={this.createPost}
                                        />
                                );
                            }}
                            />        
                        
                        <Route exact path="/edit/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/edit/', '')
                                const posts=this.state.posts;
                                let filter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))                                
                                return(
                                    <Form
                                        post={filter[0]} 
                                        editPost={this.editPost}
                                        />
                                )
                            }} />
                        {/*<Route exact path="/" component={Root}/>
                        <Route path="/About" component={About}/>
                        <Route path="/Users" component={Users}/>
                        */}
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);