import React, { useState } from 'react';
import { Card } from '../../components/card';
import { Form, Input, Select, Col, Row, Upload, Image, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';
const { Option } = Select;

const labels = [
    { name: 'name', label: 'Full Name', type: 'text', rules: [{ required: true, message: 'Please enter your name' }] },


    { name: 'mobileNumber', label: 'Mobile Number', type: 'text', rules: [{ required: true, message: 'Please enter your phone number', min: 10, max: 11 }] },
    { name: 'alternateNumber', label: 'Alternate Number', type: 'text', rules: [{ required: true, message: 'Please enter your alternate phone number', min: 10, max: 11 }] },
    { name: 'technicianType', label: 'Technician Type', type: 'select', options: ["MECHANIC", "ELECTICIAN", "SPAREPARTSHOP", "SPRINGWORK", "BATTERYSERVICES", "VEHICLEBODYREPAIR"], rules: [{ required: true, message: 'Please enter the technician type' }] },
    { name: 'vehicleType', label: 'Vehicle Type', type: 'select', options: ["ALL", "CAR", "BUS", "TRUCK"], rules: [{ required: true, message: 'Please enter the vehicle type' }] },



];

function AddTechnician() {
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

export default AddTechnician;
