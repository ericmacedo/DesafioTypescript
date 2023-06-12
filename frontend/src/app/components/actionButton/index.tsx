import { Fragment, useState, useCallback } from 'react';
import { FloatButton, message } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import ProductModal from './productModal';
import HTTP from '@/app/services/HTTP';

interface MessageProps {
  type: 'success' | 'error' | 'info' | 'warning' | 'loading' | undefined;
  content: string;
}

export default function ActionButton() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi,contextHolder] = message.useMessage();

  const handleOk = useCallback((data: any) => {

    HTTP.post('/products', data)
      .then((_: any) => {        
        setConfirmLoading(false);
        setOpen(false);

        sendMessage({ type: "success", content: "Success!" })
      })
      .catch((error: any) => {
        sendMessage({ type: "error", content: error })
      });
  }, []);

  const sendMessage = useCallback((message: MessageProps) => {
    messageApi.open(message);
  }, []);

  return (
    <Fragment>
      {contextHolder}
      <FloatButton
        shape="square"
        type="primary"
        style={{ right: 24, backgroundColor: "#510083" }}
        icon={(<PlusOutlined />)}
        onClick={() => { setOpen(true) }}/>
      <ProductModal
        open={open}
        handleOk={handleOk}
        handleCancel={() => setOpen(false) }/>
    </Fragment>
  )	
}
