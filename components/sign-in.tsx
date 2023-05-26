import React from 'react';
import { Button, Form, Input} from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import LanguageList from './language';

interface cProp {
    switchMode:boolean;
    onExcuteHide: () => any;
    }

const SignIn:React.FC<cProp> = ({switchMode, onExcuteHide}) => {
    const [form] = Form.useForm();
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

    const onFinish = (values: any) => {
        console.log('Finish:', values);
    };

    React.useEffect(() => {
        executeShowHandle(switchMode);
      }, [switchMode]);

    return <div className='signin-block authen-block'>
        <div className={`signin-block__switch ${show ? 'switch' : ''} ${executeHide && !isInit ? 'back' : ''}`}>
            
        </div>
        <div className='signin-block__content'>
            <LanguageList/>
            <div className='signin-block__head'>
                <p className='color-label'>Start your Journe</p>
                <h1 className='bold-title'>Sign In to Company</h1>
                <p>Don't have an account? 
                    <span>
                    <Button type="link" onClick={executeHideHandle} className='change-btn'>
                        Sign Up
                    </Button>
                    </span>
                </p>
            </div>
            <Form form={form} name="user_login" layout="vertical" onFinish={onFinish} className='signin-block__form'>
                <Form.Item
                    label="E-mail"
                    name="c-email-in"
                    rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input
                        size="large"
                        suffix={<MailOutlined className="site-form-item-icon" />}
                        type="email"
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="c-password-in"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input
                        size="large"
                        suffix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                    <Button
                        type="primary"
                        className='ant-btn-block'
                        size="large"
                        htmlType="submit">
                        Sign In
                    </Button>
                    )}
                </Form.Item>
            </Form>
            <p className='note-authen'>By clicking the sign in button, you therefore agree to the Privacy Policy<br/>
                For more infomation read about our Privacy here
            </p>
        </div>
    </div>
}

export default SignIn