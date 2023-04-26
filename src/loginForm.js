import React, {Component} from 'react'

export default class Login extends Component{
    render(){
        return(
            <section className='loginForm'>
                <h3>Log In</h3>
                <form className='userInput'>
                    <div className='userName'>
                        <label className='form_label' for="userName">User Name:</label>
                        <input className='form_input' type='text' id='userName' placeholder='user@email'></input>
                    </div>

                    <div className='passwordInput'>
                        <label className='form_label' for="password">Password:</label>
                        <input className='form_input' type='text' id='password' placeholder='********'></input>
                    </div>

                </form>
            </section>
        )
    }
}