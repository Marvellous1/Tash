import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import M from 'materialize-css';

import "./App.css"

import Navbar from './components/layout/Navbar';
import Homepage from './components/layout/Hompage';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectsDetail';
import PostDetail from './components/post/PostDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProjects from './components/projects/CreateProjects';
import CreateForum from './components/forum/CreateForum';
import CreatePost from './components/post/CreatePost';
import ForumList from './components/forum/ForumList';
import PostBoard from './components/post/PostBoard';
import forumCover from './components/forum/forumCover';
import postCover from './components/post/postCover';

class App extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
            <BrowserRouter>
                <div className=" App">

                    <Switch>
                        <Route  path='/dashboard' component= {Dashboard} />
                        <Route  path='/project/:id' component= {ProjectDetails} />
                        <Route  path='/post/:id' component= {PostDetail} />
                        <Route  path='/signin' component= {SignIn} />
                        <Route  path='/signup' component= {SignUp} />
                        <Route  path='/create' component= {CreateProjects} />
                        <Route  path='/test' component= {CreatePost} />
                        <Route exact path='/' component= {Homepage} />
                        <Route path='/forum' component= {forumCover} />
                        <Route path='/post' component= {postCover} />
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
