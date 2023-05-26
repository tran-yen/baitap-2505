import React from 'react';
import { Button, Form, Input} from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import LanguageList from './language';

interface cProp {
    excuteChangeMode: () => any;
    signUpComplete: () => any;
}

const SignUp:React.FC<cProp> = ({excuteChangeMode, signUpComplete}) => {
    const [form] = Form.useForm();
    const changeToSignIn = () => {
        excuteChangeMode();
    }
    const onFinish = (values: any) => {
        console.log('Finish Sign Up:', values);
        signUpComplete();
    };

    return <div className='signup-block authen-block'>
        <LanguageList/>
        <div className='signup-block__head'>
            <p className='color-label'>Register Now</p>
            <h1 className='bold-title'>Sign Up For Free</h1>
            <p>Already have an account? 
                <span>
                <Button type="link" onClick={changeToSignIn} className='change-btn'>
                    Sign In
                </Button>
                </span>
            </p>
        </div>
        <Form form={form} name="user_signup" layout="vertical" onFinish={onFinish} className='signup-block__form'>
            <Form.Item
                label="UserName"
                name="c-username"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input size="large" suffix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                label="E-mail"
                name="c-email"
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
                name="c-password"
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
                    Sign Up
                </Button>
                )}
            </Form.Item>
        </Form>
        <p className='note-authen'>By clicking the sign in button, you therefore agree to the Privacy Policy<br/>
            For more infomation read about our Privacy here
        </p>
    </div>
}

export default SignUp