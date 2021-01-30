import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/reducers/auth';

const Login = (props) => {

    const submit = () => {
        console.log(props);
        props.onSubmit()
    }

    return (
        <div className="App">
            <h1>Pagina de Login</h1>
            <button onClick={submit}>Login</button>
        </div>
    );
};

const ms2p = (state) => {
    return {
        ...state.auth,
    };
};
  
const md2p = { ...actions };
  

export default connect(ms2p, md2p)(Login);
