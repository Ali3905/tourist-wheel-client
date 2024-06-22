import React, { useState } from 'react';
import { Card } from '../../components/card';
import { Form, Input, Select, Col, Row, Upload, Image, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import Maps from "../../components/maps"
const { Option } = Select;

const labels = [
    { name: 'name', label: 'Full Name', type: 'text', rules: [{ required: true, message: 'Please enter your name' }] },

    { name: 'password', label: 'Password', type: 'password', rules: [{ required: true, message: 'Please enter your password' }] },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'text', dependencies: ['password'], rules: [{ required: true, message: 'Please confirm your password' }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve(); } return Promise.reject(new Error('The two passwords do not match')); }, })] },

    { name: 'vehicleType', label: 'Vehicle Type', type: 'select', options: ["ALL", "CAR", "BUS", "TRUCK"], rules: [{ required: true, message: 'Please select a vehicle type' }] },
    { name: 'mobileNumber', label: 'Mobile Number', type: 'text', rules: [{ required: true, message: 'Please enter your phone number', min: 10, max: 11 }] },
    { name: 'city', label: 'City', type: 'text', rules: [{ required: true, message: 'Please enter the city' }] },
    { name: 'state', label: 'State', type: 'text', rules: [{ required: true, message: 'Please enter the state' }] },

    { name: 'photo', label: 'Driver Photo', type: 'file', rules: [{ required: true, message: 'Please provide the photo of driver' }] },
    { name: 'aadharCard', label: 'Aadhar Card', type: 'file', rules: [{ required: true, message: 'Please provide the photo of aadhar Card' }] },
    { name: 'license', label: 'License', type: 'file', rules: [{ required: true, message: 'Please provide the photo of license' }] },


];

function AddVendor() {
    const [branchImage, setBranchImage] = useState(null);
    const [identityImage, setIdentityImage] = useState(null);
    // const center = { lat: 8.560170275394498, lng: 77.23505676867723 };
    const beforeUpload = (file, setImage) => {
        setImage(file);
        return false;
    };

    // const handleMapClick = (location) => {
    //     setClickedLocation(location);
    // };


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
                                        
                                        // name="upload"
                                        // label="Upload"
                                        // valuePropName="fileList"
                                        // getValueFromEvent={normFile}
                                        // extra="longgggggggggggggggggggggggggggggggggg"
                                      >
                                        <Upload name="photo" listType="picture" beforeUpload={(file) => beforeUpload(file, setBranchImage)}>
                                          <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                      </Form.Item>  : (
                                            <Input />
                                        )
                                    )}
                                </Form.Item>
                            </Col>

                        ))}

                        {/* <Col span={12} style={{ display: "flex", justifyContent: "space-between" }}>
                            <Form.Item label="Branch Image">
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
                            <Form.Item label="Vendor Agreement">
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
                        </Col> */}
                        {/* <Maps center={center} /> */}
                    </Row>
                </div>
            </Card>
        </Col>
    );
}

export default AddVendor;
