import React from 'react'

const LoginForm = () => {
    const handleChange = () => {
        console.log('submitted');
    }

    let state = {
        email: '',
        password: ''
    }

    return (
        <form>
            <div>
                <input type="email" name='email' placeholder='email' onChange={handleChange} />
            </div>

            <div>
                <input type='password' name='password' placeholder='password' onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;