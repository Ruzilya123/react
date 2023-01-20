import React, { Component } from 'react'

function LoginButton(props) {

    return (
      <button onClick={props.onClick}>Войти</button>
    );

}

function LogoutButton(props) {

    return (
        <button onClick={props.onClick}>Выйти</button>
    )

}

function UserGreeting(props) {

    return (
      <h1>С возвращением!</h1>
    )

}

function GuestGreeting(props) {

    return (
        <h1>Войдите, пожалуйста</h1>
    )

}

function Greeting(props) {

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />
    }
    return (
        <GuestGreeting />
    )

}

class LoginControl extends Component {

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn : false}
    }

    handleLoginClick() {
        this.setState({isLoggedIn : true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn : false})
    }

    render() {

        const isLoggedIn = this.state.isLoggedIn

        let button

        if (!isLoggedIn) {
            button = <div>
                <form style={{display: "flex", flexDirection: "column", maxWidth: "400px"}}>
                    <input style={{marginBottom:"10px"}} type="text" placeholder='Name:' />
                    <input style={{marginBottom:"10px"}} type="text" placeholder='Surname:' />
                    <input style={{marginBottom:"10px"}} type="number" placeholder='Age:' />
                </form>
                <LoginButton onClick={this.handleLoginClick} />
            </div>
        }
        else {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        }

        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default LoginControl
