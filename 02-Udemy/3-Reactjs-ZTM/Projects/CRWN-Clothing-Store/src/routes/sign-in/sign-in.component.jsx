import SignUpForm from '../../components/signup-form/signup-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import './sign-in.styles.scss'


const SignIn = () => {
    return (
        <div className="sign-in-authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignIn