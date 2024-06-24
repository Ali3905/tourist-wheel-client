import React, { useState } from 'react';
import { Card } from '../../components/card';
import { Form, Input, Select, Col, Row, Upload, Image, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';
import { dataForVehicles as vehicles, dataForDrivers as drivers, dataForCleaners as cleaners } from "../../jsonData/tableData"
// import Maps from "../../components/maps"
const { Option } = Select;

const labels = [
    { name: 'vehicleId', label: 'Vehicle', type: 'select', options: vehicles, rules: [{ required: true, message: 'Please Select Car' }] },

    { name: 'departurePlace', label: 'Departure Place', type: 'text', rules: [{ required: true, message: 'Please enter departure place' }] },
    { name: 'destinationPlace', label: 'Destination Place', type: 'text', rules: [{ required: true, message: 'Please enter destination place' }] },

    { name: 'primaryDriverId', label: 'Primary Driver', type: 'select', options: drivers, rules: [{ required: true, message: 'Please select a Driver' }] },
    { name: 'secondaryDriverId', label: 'Secondary Driver', type: 'select', options: drivers, rules: [{ required: true, message: 'Please select a Driver' }] },
    { name: 'cleanerId', label: 'Cleaner', type: 'select', options: cleaners, rules: [{ required: true, message: 'Please select a cleaner' }] },


    { name: 'departureTime', label: 'Departure time', type: 'time', rules: [{ required: true, message: 'Please enter departure time' }] },
    { name: 'instructions', label: 'Instructions', type: 'text', rules: [{ required: true, message: 'Please enter Instructions' }] },
    { name: 'state', label: 'State', type: 'text', rules: [{ required: true, message: 'Please enter the state' }] },

    { name: 'beforeJourneyPhotos', label: 'Before journey Photos', type: 'file', rules: [{ required: true, message: 'Please provide the photo before journey' }] },
    { name: 'afterJourneyPhotos', label: 'Driver Photo', type: 'file', rules: [{ required: true, message: 'Please provide the photo after journey' }] },


];

function AddDailyRoute() {
    const { handleFileChange } = useOutletContext()

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
                                        field.name === "vehicleId" ? <Select
                                            showSearch
                                            placeholder="None"
                                        >
                                            {field.options.map((option) => (
                                                <Option key={option.number} value={option.number}>
                                                    {option.number}
                                                </Option>
                                            ))}
                                        </Select> : <Select
                                            showSearch
                                            placeholder="None"
                                        >
                                            {field.options.map((option) => (
                                                <Option key={option.name} value={option.name} >

                                                    <span style={{ display: "flex", alignItems: "center", gap : "10px" }}>
                                                        <img width={20} height={20} src={option?.photo || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAACUCAMAAADxqtj8AAAAZlBMVEUAAADOzs7S0tITExO6urqpqanp6enf399jY2P39/fs7OzLy8uhoaFOTk7X19ezs7NtbW1XV1csLCwhISFJSUlcXFzBwcFCQkKWlpaPj48YGBg7Ozv///9+fn4cHBwxMTGHh4d2dnaWtgdGAAADe0lEQVR4nO3X27abIBAGYCUR8AR4jhoPef+XLCqgadLurMbVq//rRZ2oOOoMsj0PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOdUmV4qmNukyp7OJ25pVS6dvT3sl7t9lwxffIK7mq8i8TfYfXhBBfyC1StSBE1MrsHGIiiLh+mP9UJ+a+p5vw9b/WJNxc9TVEPJ+Z90pRyZumVO0WhUHVNJUMt/TbKMn6kse0/9sQTnCXW/Z5zVTZpAOVxRJ21Fdln93C5OTkx3t7iBpmxg/Ykm8TDlvok0/GUrS+btnfWLn+z6N1gFiYA8Lq+4yP/PoYtWzaNiY2L1f1ze9d+Ph5qOleJVv2fTSb325s9Lzqbiu+jr/N90l5H4+hcK820I8rj7gNY2m3xtIdXeybS0SkF2zZK2YrLYt0y0hhj6no5zPAB27sGF1speh2DZcXXdiw9e00lDF3S+KpjBPS2eyD/REv75DcbDTRwTvRVXplTcPIX7t02usyCyfds27mfLDGbF1mexATxWGkiuq7MtkfytGXXsFcyrm4eSciDz0RlEWZhMt102iyOwr9yhP3xr2M7v02REsT5EwcB8rZ0v0me7a/FEm8Zj+3q8+cdQoSi61Em0iPy6nrgi6qPOm7AzPK97Na9vAm8jwNyfVxm+zp/oR1/6R7sZ+cve+mg0dUfpq9Tl8R/+nLOWxv7T9nT1x/jVH7YeVobfj85LMw23L9oXLG+MzsR+JGu5Dgo65dFIJRdYhzYj55/7lr46vd6nT2LzOmq47W7/aTlppfat+Z7zJYCRbI2/QyY7pHdPKMGbj5vqD6+ek7sDvI8rVyD3j/Wum3JJaa17XvfskSg4gkmXO9ZLBvavtauYtw+vSB+xZ3XbteZ35eKdS2bcfjSoGRdZ5vTa0fJdtN9nS2PywrhSy0n96TVwpeTM1GtNRqz4K1cC/Beht9aOpZ7FftmG3Y4XXxY+ped8w2zZhVWs22nx9vbvg7VAxpmQ0mJx5JXpb8alY4QxRUZaoI26s+c53izS8taLMvJH3oUWdq1vuM6LBKovb3E741SRLHxLeNlUnhx0zauecRL3vlZ8t7/cztXyeF/usk9klrwj4gOqpPbVmjz3g17WHKq8NCcNQ7m9dz/iDfx+krnh0+aE3F0+7NGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8G9+AVNsLN+N9TlmAAAAAElFTkSuQmCC"} alt="driver" />
                                                        <p>{option.name}</p>
                                                    </span>

                                                </Option>
                                            ))}
                                        </Select>
                                    ) : (field.type === 'file' ? <Form.Item
                                        // label={field.label}
                                        name={field.name}
                                        valuePropName="file"
                                        // getValueFromEvent={e => e.target.files[0]}
                                        onChange={e => handleFileChange(e, field.name)}
                                    >
                                        <Upload name={field.name} listType='picture' beforeUpload={e => false}>
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                    </Form.Item> : (
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

export default AddDailyRoute;
