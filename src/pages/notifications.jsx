import React, { useState } from 'react';
import { Card } from '../components/card';
import { Form, Input, Select, Col, Row, Upload, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const labels = [
    { name: 'Title', label: 'Title', type: 'text', rules: [{ required: true, message: 'Please enter your name' }] },
    { name: 'Description', label: 'Description', type: 'textarea', rules: [{ required: true, message: 'Please enter the branch name' }] },
];

function Notifications() {
    const [branchImage, setBranchImage] = useState(null);
    const beforeUpload = (file, setImage) => {
        setImage(file);
        return false;
    };

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
                                        <Select>
                                            {field.options.map((option) => (
                                                <Option key={option} value={option}>
                                                    {option}
                                                </Option>
                                            ))}
                                        </Select>
                                    ) : (
                                        field.type === 'textarea' ? (
                                            <Input.TextArea rows={1} />
                                        ) : (
                                            <Input />
                                        )
                                    )}
                                </Form.Item>
                            </Col>
                        ))}

                        <Col span={12} style={{ display: "flex", justifyContent: "space-between" }}>
                            <Form.Item label="Notification Banner">
                                <Upload
                                    showUploadList={false}
                                    beforeUpload={(file) => beforeUpload(file, setBranchImage)}
                                >
                                    <div style={{ width: "265px" }}>
                                        <div className="custom-upload-area" style={previewAreaStyle}>
                                            {branchImage ? (
                                                <>
                                                    <div style={previewAreaStyle}>
                                                        <Image src={URL.createObjectURL(branchImage)} alt="Branch Preview" />
                                                    </div>
                                                </>
                                            ) : (
                                                <div>
                                                    <UploadOutlined style={{ fontSize: '36px', color: '#999' }} />
                                                    <div style={{ marginTop: 8 }}>Click or drag image to upload</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    );
}

export default Notifications;
