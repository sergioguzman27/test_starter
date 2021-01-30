import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { actions } from './redux/reducers/auth';

class PrivateRoute extends Component {

    isAuthenticated = () => {
        console.log("props ", this.props)
        const token = localStorage.getItem("token");
        const { getMe, me } = this.props;
        if (!!token && !!me.username) {
            return true;
        } else if(token) {
            getMe();
            return "Verifying"
        }
        return false;
    };

    render() {
        const { component: Component, logOut, me, ...rest } = this.props;
        const isAuthenticated = this.isAuthenticated();

        return (
            <Route {...rest} render={props => (
                isAuthenticated ? (
                    (isAuthenticated === true) ? (
                        <div style={{ width: '100%' }}>
                            {/* Layout */}
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                                <h3>HEADER</h3>
                                <button onClick={logOut}>Log out</button>
                            </div>
                            <div style={{ width: '100%' }}>
                                <Component {...props} />
                            </div>
                        </div>
                    ) : (
                        <div>
                            {/* Mascara de carga */}
                        </div>
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            )}/>
        )
    }
}

const ms2p = (state) => {
    return {
        ...state.auth,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(PrivateRoute);
