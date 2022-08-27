// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import {// auth, signInWithGoogleRedirect,
    createUserDocumentFromAuth,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/signup-form/signup-form.component'





const SignIn = () => {
    // useEffect(
    //     () => async () => {
    //       const response = await getRedirectResult(auth);

    //       if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //       }
          
    //       console.log(response);
    //     },
    //     []
    //   );
     
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>Sign in with Google Popup</button>
            <SignUpForm />
            
            {/*<button onClick={ signInWithGoogleRedirect }>Sign in with Google redirect</button> */}
        </div>
    )
}

export default SignIn