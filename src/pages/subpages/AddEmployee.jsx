import React, { useState } from 'react';
import { Card } from '../../components/card';
import { Form, Input, Select, Col, Row, Upload, Image, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';
// import Maps from "../../components/maps"
const { Option } = Select;

const labels = [
    { name: 'name', label: 'Full Name', type: 'text', rules: [{ required: true, message: 'Please enter your name' }] },

    { name: 'password', label: 'Password', type: 'password', rules: [{ required: true, message: 'Please enter your password' }] },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'text', dependencies: ['password'], rules: [{ required: true, message: 'Please confirm your password' }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve(); } return Promise.reject(new Error('The two passwords do not match')); }, })] },

    { name: 'mobileNumber', label: 'Mobile Number', type: 'text', rules: [{ required: true, message: 'Please enter your phone number', min: 10, max: 11 }] },
    { name: 'employeeType', label: 'Employee Type', type: 'select', options: ["MANAGER", "CLEANER", "OFFICE-BOY", "ACCOUNTANT", "TELECALLER"], rules: [{ required: true, message: 'Please enter the city' }] },
    { name: 'state', label: 'State', type: 'text', rules: [{ required: true, message: 'Please enter the state' }] },

    { name: 'photo', label: 'Driver Photo', type: 'file', rules: [{ required: true, message: 'Please provide the photo of driver' }] },
    { name: 'aadharCard', label: 'Aadhar Card', type: 'file', rules: [{ required: true, message: 'Please provide the photo of aadhar Card' }] },


];

function AddCleaner() {
    const { handleFileChange } = useOutletContext();

    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const previewAreaStyle = {
        border: '1px solid #d9d9d9',
        padding: '8px',
        borderRadius: '4px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden"
    };

    return (
        <Col span={24}>
            <Card>
                <div {...formItemLayout}>
                    <Row gutter={24}>
                        {labels.map((field, index) => (
                            <Col span={12} key={index}>
                                <Form.Item
                                    label={field.label}
                                    name={field.name}
                                    rules={field.rules}
                                    dependencies={field.dependencies}
                                >
                                    {field.type === 'select' ? (
                                        <Select
                                            placeholder="None"
                                        >
                                            {field.options.map((option) => (
                                                <Option key={option} value={option}>
                                                    {option}
                                                </Option>
                                            ))}
                                        </Select>
                                    ) : (
                                        field.type === 'password' ? (
                                            <Input.Password />
                                        ) : field.type === 'file' ? <Form.Item
                                                // label={field.label}
                                                name={field.name}
                                                valuePropName="file"
                                                // getValueFromEvent={e => e.target.files[0]}
                                                onChange={e => handleFileChange(e, field.name)}
                                            >
                                                <Upload name={field.name} listType='picture' beforeUpload={e => false}>
                                                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                                                </Upload>
                                            </Form.Item>
                                            : (
                                                <Input />
                                            )
                                    )}
                                </Form.Item>
                            </Col>

                        ))}

                       
                    </Row>
                </div>
            </Card>
        </Col>
    );
}

export default AddCleaner;
