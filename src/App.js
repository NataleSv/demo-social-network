import { Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import React from "react";
import SideBar from './components/SideBar/SideBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {WithSuspense} from "./hoc/WithSuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/Message/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <SideBar/>
                <div className='wrapperContent'>
                    <Routes>
                        <Route path="/profile/*" element = { WithSuspense (ProfileContainer)}/>
                        <Route path="/dialogs/*" element = { WithSuspense (DialogsContainer)}/>
                        <Route path="/users/*" element = { <UsersContainer/> }/>
                        <Route path="/news" element = { <News/> }/>
                        <Route path="/music" element = { <Music/> }/>
                        <Route path="/settings" element = { <Setting/> }/>
                        <Route path="/login" element = { <LoginPage/> }/>
                    </Routes>
                </div>
                <Footer/>
            </div>


        );
    }
    }
    const mapStateToProps = (state) => ({
        initialized: state.app.initialized
    })

export default connect(mapStateToProps, {initializeApp})(App);
