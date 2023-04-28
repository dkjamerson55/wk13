// class based component for Login
import React, {Component} from 'react'

//shell for class based component for loginForm
export default class Login extends Component{
    render(){
        return(
            <section className='loginForm'>
                <h3>Log In</h3>
                <form className='userInput'>

                    {/* created two div's for creating username & password labels w/ placeholders for user input */}
                    <div className='userName'>
                        <label className='form_label' for="userName">User Name:</label>
                        <input className='form_input' type='text' id='userName' placeholder='user@email'></input>
                    </div>

                    <div className='passwordInput'>
                        <label className='form_label' for="password">Password:</label>
                        <input className='form_input' type='text' id='password' placeholder='********'></input>
                    </div>
                    <button id="submitBtn" class="btn btn-warning form-control">Submit</button>

                </form>
            </section>
        )
    }
}