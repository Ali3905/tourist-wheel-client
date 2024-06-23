import React, { useState } from 'react';
import { Card } from '../../components/card';
import { Form, Input, Select, Col, Row, Upload, Image, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';
// import Maps from "../../components/maps"
const { Option } = Select;

const labels = [
    { name: 'number', label: 'Vehicle Number', type: 'text', rules: [{ required: true, message: 'Please enter vehicle number' }] },

    { name: 'seatingCapacity', label: 'Seating Capacity', type: 'number', rules: [{ required: true, message: 'Please enter Seating capacity' }] },
    { name: 'model', label: 'vehicle Model', type: 'text', rules: [{ required: true, message: 'Please enter Vehicle Model' }] },

    { name: 'bodyName', label: 'Body Name', type: 'text', rules: [{ required: true, message: 'Please enter Body name' }] },
    { name: 'type', label: 'Vehicle Type', type: 'select', options: ["CAR", "TRUCK", "BUS", "TAMPO"], rules: [{ required: true, message: 'Please select one type' }] },
    { name: 'chassIsBrand', label: 'Is Brand ?', type: 'boolean', rules: [{ required: true, message: 'Select one' }] },
    { name: 'isAC', label: 'Is AC ?', type: 'boolean', rules: [{ required: true, message: 'Select one' }] },
    { name: 'isForRent', label: 'Is for Rent ?', type: 'boolean', rules: [{ required: true, message: 'Select one' }] },
    { name: 'isForSell', label: 'Is for Sell ?', type: 'boolean', rules: [{ required: true, message: 'Select one' }] },

    { name: 'photos', label: 'Vehicle Photo', type: 'file', rules: [{ required: true, message: 'Please provide the photo of driver' }] },
];

function AddVehicle() {
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

export default AddVehicle;
