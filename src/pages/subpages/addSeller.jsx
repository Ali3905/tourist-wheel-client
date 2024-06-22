import React, { useState } from 'react';
import { Card } from '../../components/card';
import { Form, Input, Select, Col, Row, Upload, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const labels = [
    { name: 'Name', label: 'First Name', type: 'text', rules: [{ required: true, message: 'Please enter your name' }] },
    { name: 'branchName', label: 'Branch Name', type: 'text', rules: [{ required: true, message: 'Please enter the branch name' }] },
    { name: 'phoneNumber', label: 'Phone Number', type: 'text', rules: [{ required: true, message: 'Please enter your phone number' }] },
    { name: 'identityType', label: 'Identity Type', type: 'select', options: ['aadhar', 'pan'], rules: [{ required: true, message: 'Please select an identity type' }] },
    { name: 'branchAddress', label: 'Branch Address', type: 'text', rules: [{ required: true, message: 'Please enter branch address' }] },
    { name: 'identityNumber', label: 'Identity Number', type: 'text', rules: [{ required: true, message: 'Please select an identity Number' }] },
    { name: 'identityType', label: 'Thaluk', type: 'select', options: ['aadhar', 'pan'], rules: [{ required: true, message: 'Please select an identity type' }] },
    { name: 'pincode', label: 'Pincode', type: 'text', rules: [{ required: true, message: 'Please enter your Pincode' }] },
    { name: 'email', label: 'Email', type: 'text', rules: [{ required: true, message: 'Please enter your email' }] },
    { name: 'password', label: 'Password', type: 'input', rules: [{ required: true, message: 'Please enter your password' }] },

];

function AddSeller() {
    const [branchImage, setBranchImage] = useState(null);
    const [identityImage, setIdentityImage] = useState(null);
    const beforeUpload = (file, setImage) => {
        setImage(file);
        return false;
    };
    // const removeImage = (setImage) => {
    //     setImage(null);
    // };

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
                                    field.type === 'password' ? (
                                        <Input.Password />
                                    ) : (
                                        <Input />
                                    )
                                )}
                            </Form.Item>
                        </Col>

                    ))}

                    <Col span={12} style={{ display: "flex", justifyContent: "space-between" }}>
                        <Form.Item label="Seller Image">
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
                                                {/* <div> <Button onClick={() => removeImage(setBranchImage)}>Remove</Button>

                                            </div> */}
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
                        <Form.Item label="Identity Image">
                            <Upload
                                showUploadList={false}
                                beforeUpload={(file) => beforeUpload(file, setIdentityImage)}
                            >
                                <div style={{ width: "265px" }}>
                                    <div className="custom-upload-area" style={previewAreaStyle}>
                                        {identityImage ? (
                                            <>
                                                <div style={previewAreaStyle}>
                                                    <Image src={URL.createObjectURL(identityImage)} alt="Identity Preview" />

                                                </div>
                                                {/* <div>
                                                <Button onClick={() => removeImage(setIdentityImage)}>Remove</Button>
                                            </div> */}
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
                    <Col span={12} style={{ display: "flex", justifyContent: "space-between" }}>
                        <Form.Item label="Byzo Agreement">
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
                                                {/* <div> <Button onClick={() => removeImage(setBranchImage)}>Remove</Button>

                                            </div> */}
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
                        <Form.Item label="Seller Agreement">
                            <Upload
                                showUploadList={false}
                                beforeUpload={(file) => beforeUpload(file, setIdentityImage)}
                            >
                                <div style={{ width: "265px" }}>
                                    <div className="custom-upload-area" style={previewAreaStyle}>
                                        {identityImage ? (
                                            <>
                                                <div style={previewAreaStyle}>
                                                    <Image src={URL.createObjectURL(identityImage)} alt="Identity Preview" />

                                                </div>
                                                {/* <div>
                                                <Button onClick={() => removeImage(setIdentityImage)}>Remove</Button>
                                            </div> */}
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

export default AddSeller;
