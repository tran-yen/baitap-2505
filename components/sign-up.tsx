import React from 'react';
import { Button } from 'antd';

const SignUp:React.FC<{excuteChangeMode: () => any}> = ({excuteChangeMode}) => {

    const changeToSignIn = () => {
        excuteChangeMode();
    }

    return <div className='Signup-block authen-block'>
        <div>
        <Button type="link" onClick={changeToSignIn}>
          Sign In
        </Button>
            Sign Up
        </div>
    </div>
}

export default SignUp