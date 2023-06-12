import {
  Form, Modal, Input, InputNumber
} from 'antd';

export interface ProductModalProps {
  open: boolean;
  handleOk?: (values: any) => void;
  handleCancel?: () => void;
  confirmLoading?: boolean;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

export default function ProductModal({
  open, handleOk, confirmLoading, handleCancel
}: ProductModalProps) {
  const [form] = Form.useForm<any>();

  const handleOkFunction = () => handleOk && handleOk(form.getFieldsValue());

  return (
    <Modal
      title="Register new product"
      open={open}
      onOk={handleOkFunction}
      confirmLoading={confirmLoading || false}
      onCancel={handleCancel}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="product"
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >

        <Form.Item
          name="name"
          label="Name"
          rules={[
              {
              required: true,
              type: 'string',
              message: 'Please input the product name!',
              }
          ]}
          >
          <Input />
        </Form.Item>

        <Form.Item
          name="brand"
          label="Brand"
          rules={[
              {
              required: true,
              type: 'string',
              message: 'Please input the product brand!',
              }
          ]}
          >
          <Input />
        </Form.Item>

        <Form.Item
          name="image"
          label="Image"
          rules={[
              {
              required: true,
              type: 'string',
              message: 'Please input a valid image URL!',
              }
          ]}
          >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{
            required: true,
            message: 'Please, input the product price!'
          }]
        }>
          <InputNumber
            defaultValue={0}
            min={0}
            addonBefore="R$"
            formatter={(value) => `${value}`.replace(/\B(?=(\d{2})+(?!\d))/g, ',')}
            parser={(value: any) => value!.replace(/\$\s?|(,*)/g, '')} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
