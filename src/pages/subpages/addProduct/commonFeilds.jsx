// CommonFields.js

import React from 'react';
import { Form, Select, Upload, Image, Input , DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const previewAreaStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '150px',
  border: '1px dashed #d9d9d9',
  borderRadius: '2px',
};

const beforeUpload = (file, setProductImage) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    setProductImage(e.target.result);
  };
  reader.readAsDataURL(file);
  return false;
};

const CommonFields = ({ field, setProductImage, productImage }) => {
  return (
    <Form.Item
      label={field.label}
      name={field.name}
      rules={field.rules}
      dependencies={field.dependencies}
      labelCol={{ span: 24 }} 
    >
      {field.type === 'select' ? (
        <Select>
          {field.options && field.options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      ) : field.type === 'upload' ? (
        <Upload showUploadList={false} beforeUpload={(file) => beforeUpload(file, setProductImage)}>
          <div style={{ width: "170px" }}>
            <div className="custom-upload-area" style={previewAreaStyle}>
              {productImage ? (
                <>
                  <div style={previewAreaStyle}>
                    <Image src={URL.createObjectURL(productImage)} alt="Product Preview" />
                  </div>
                </>
              ) : (
                <div>
                  <UploadOutlined style={{ fontSize: '36px', color: '#999' }} />
                  <div style={{ marginTop: 8 }}>Image upload</div>
                </div>
              )}
            </div>
          </div>
        </Upload>
      ) : field.type === 'textarea' ? (
        <TextArea rows={4} style={{ height: '200px' }} />
      ) : field.type === 'date' ? (
        <DatePicker style={{ width: '100%' }} />
      )  : (
        <Input />
      )}
    </Form.Item>
  );
};

export default CommonFields;
