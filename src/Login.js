import React from 'react';
import backgroundImage from './../src/background.jpg'

class Login extends React.Component {
    state = {
        name: '',
        password: ''
    }

    render() {
        return (
            <div style={{ textAlign: "center", alignSelf: "center", border: '1px' }}>
                <form>
                    <h1>Login First</h1>
                    <input type="Email" placeholder="Email" name="email" ></input>
                    <br></br>
                    <input type="Password" placeholder="Password" name="password"></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;