import React from 'react';
import { Select} from 'antd';

const LanguageList:React.FC = () => {
    return <div>
        <Select
        defaultValue="en-us"
        style={{ width: 120 }}
        options={[
            { value: 'en-us', label: 'Enlish-US' },
            { value: 'en-uk', label: 'English-UK' },
            { value: 'vn', label: 'Viet Nam' },
        ]}
        />
    </div>
}

export default LanguageList