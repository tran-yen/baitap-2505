import React from 'react';
import { Button } from 'antd';

interface cProp {
    switchMode:boolean;
    onExcuteHide: () => any;
    }

const SignIn:React.FC<cProp> = ({switchMode, onExcuteHide}) => {
    const [show, setShow] = React.useState<boolean>(switchMode);
    const [executeHide, setExecuteHide] = React.useState<boolean>(false);
    const [isInit, setInit] = React.useState<boolean>(true);
    
    const executeHideHandle = () => {
        setExecuteHide(true);
        setShow(false);
        onExcuteHide();
    }

    const executeShowHandle = (_switchMode:boolean) => {
        setExecuteHide(!_switchMode);
        setShow(_switchMode);
        _switchMode && setInit(false);
    }

    React.useEffect(() => {
        executeShowHandle(switchMode);
      }, [switchMode]);

    return <div className='signin-block authen-block'>
        <div className={`signin-block__switch ${show ? 'switch' : ''} ${executeHide && !isInit ? 'back' : ''}`}>
            
        </div>
        <div className='signin-block__content'>
            Sign In
            <Button type="link" onClick={executeHideHandle}>
                Sign Up
            </Button>
        </div>
    </div>
}

export default SignIn