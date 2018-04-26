import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {signOut} from '../actions';

class Nav extends Component{

    renderLinks(){
        if(this.props.auth){
            return [
                <li key="0">
                    Hello, {this.props.username}
                </li>,
                <li key="1">
                    <Link to="/">Home</Link>
                </li>,
                <li key="2">
                    <Link to="/chat">Chat</Link>
                </li>,
                <li key="3">
                    <button onClick={this.props.signOut} className="btn deep-purple lighten-4">Sign Out</button>
                </li>
            ]
        }
        else{

            return [
                <li key="0">
                    <Link to="/">Home</Link>
                </li>,
                <li key="1">
                    <Link to="/sign-up">Sign Up</Link>
                </li>,
                <li key="2">
                    <Link to="/sign-in">Sign In</Link>
                </li>
            ]
        }
    }

    render(){

        return(
            <nav>
                <div className="nav-wrapper deep-purple darken-3">
                    <Link to="/" className="brand-logo"><span aria-label="jsx-a11y/accessible-emoji" role="img">🦋</span> Chat</Link>
                    <ul className="right">
                        {this.renderLinks()} 
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        username: state.user.username,
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signOut})(Nav);