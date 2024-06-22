import React, { useEffect, useState } from 'react';
import { Form , Row, Col, } from 'antd';
import * as Styled from "../../components/formButton"
import { Card } from '../../components/card';
import { CustomTimePicker, CustomInput, CustomSelect , MultiSelectWithTyping } from './formElement';
import { handleSelectChange, handleDeliveryPeriodChange } from './formUtils';
import { labels , deliveryPeriodOptions , deliveryPeriodOptionsone , HandingRates , HandingRatesOne , randomData} from './formConstants';
const WebsiteManagement = () => {

  const [form] = Form.useForm();
  const [roleMappings, setRoleMappings] = useState([]);
  const [roleMappingsOne, setRoleMappingsOne] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [deliveryPeriod, setdeliveryPeriod] = useState([]);
  const [deliveryPeriodOne, setdeliveryPeriodOne] = useState([]);
  const [hoveredInput, setHoveredInput] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  
  useEffect(() => {
    if (!initialized) {
      const initialRoleMappings = deliveryPeriodOptions.map((option) => ({
        originalValue: option,
        displayedValue: `${option}`,
      }));
      const initialRoleMappingsone = deliveryPeriodOptionsone.map((option) => ({
        originalValue: option,
        displayedValue: `${option}`,
      }));
      const initialRateMapping = HandingRates.map((option) => ({
        originalValue: option,
        displayedValue: `${option}`,
      }));
      const initialRateMappingOne = HandingRatesOne.map((option) => ({
        originalValue: option,
        displayedValue: `${option}`,
      }));
      setRoleMappings(initialRoleMappings);
      setRoleMappingsOne(initialRoleMappingsone);
      setdeliveryPeriod(initialRateMapping)
      setdeliveryPeriodOne(initialRateMappingOne)
      setInitialized(true);
    }
  }, [initialized]);

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const handleMouseEnter = (index) => {
    setHoveredInput(index);
  };
  const handleMouseLeave = () => {
    setHoveredInput(null);
  };
  const handleFocus = (index) => {
    setFocusedInput(index);
  };
  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <Form form={form} name="myForm" onFinish={onFinish} layout="vertical" initialValues={{ input10: 'normal' }}>
    <Row gutter={[16, 2]}>
      <Col span={8}>
        <Card>
          {labels.slice(0, 2).map((label, index) => (
            <CustomTimePicker
              key={index}
              label={label}
              name={`input${index}`}
              rules={[{ required: true, message: `Please enter ${label}` }]}
              hoveredInput={hoveredInput === index}
              focusedInput={focusedInput === index}
              handleMouseEnter={() => handleMouseEnter(index)}
              handleMouseLeave={handleMouseLeave}
              handleFocus={() => handleFocus(index)}
              handleBlur={handleBlur}
            />
          ))}
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          {labels.slice(2, 4).map((label, index) => (
            <CustomInput
              key={index}
              label={label}
              name={`input${index + 2}`}
              rules={[{ required: true, message: `Please enter ${label}` }]}
            />
          ))}
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          {labels.slice(4, 6).map((label, index) => (
            <CustomInput
              key={index}
              label={label}
              name={`input${index + 4}`}
              rules={[{ required: true, message: `Please enter ${label}` }]}
            />
          ))}
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          {labels.slice(6, 8).map((label, index) => (
            <CustomSelect
              key={index}
              label={label}
              name={`input${index + 6}`}
              rules={[{ required: true, message: `Please select ${label}` }]}
              options={randomData.map(option => ({ originalValue: option, displayedValue: option }))}
            />
          ))}
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          {labels.slice(8, 10).map((label, index) => (
            <CustomTimePicker
              key={index + 8}
              label={label}
              name={`input${index + 8}`}
              rules={[{ required: true, message: `Please enter ${label}` }]}
              hoveredInput={hoveredInput === index + 8}
              focusedInput={focusedInput === index + 8}
              handleMouseEnter={() => handleMouseEnter(index + 8)}
              handleMouseLeave={handleMouseLeave}
              handleFocus={() => handleFocus(index + 8)}
              handleBlur={handleBlur}
            />
          ))}
        </Card>
      </Col>
      <Col span={9}>
        <Card>

          {labels.slice(10, 11).map((label, index) => (
            <CustomSelect
              key={index}
              label={label}
              name={`input${index + 11}`}
              rules={[{ required: true, message: `Please select ${label}` }]}
              options={roleMappings.map(mapping => ({ originalValue: mapping.originalValue, displayedValue: mapping.displayedValue }))}
              handleSelectChange={(selectedValues) => handleSelectChange(selectedValues, roleMappings, setRoleMappings, form, index + 11)}
            />
          ))}

          {labels.slice(11, 12).map((label, index) => (
            <CustomSelect
              key={index}
              label={label}
              name={`input${index + 12}`}
              rules={[{ required: true, message: `Please select ${label}` }]}
              options={roleMappingsOne.map(mapping => ({ originalValue: mapping.originalValue, displayedValue: mapping.displayedValue }))}
              handleSelectChange={(selectedValues) => handleSelectChange(selectedValues, roleMappingsOne, setRoleMappingsOne, form, index + 12)}
            />
          ))}
        </Card>

      </Col>
      <Col span={9}>
        <Card>
          {labels.slice(12, 13).map((label, index) => (
            <MultiSelectWithTyping
              key={index}
              label={label}
              name={`input${index + 13}`}
              rules={[{ required: true, message: `Please select ${label}` }]}
              options={deliveryPeriod.map(mapping => ({ originalValue: mapping.originalValue, displayedValue: mapping.displayedValue }))}
              handleSelectChange={(selectedValues) => handleDeliveryPeriodChange(selectedValues, deliveryPeriod, setdeliveryPeriod, form, index + 13)}
            />
          ))}

          {labels.slice(13, 14).map((label, index) => (
            <CustomSelect
              key={index}
              label={label}
              name={`input${index + 14}`}
              rules={[{ required: true, message: `Please select ${label}` }]}
              options={deliveryPeriodOne.map(mapping => ({ originalValue: mapping.originalValue, displayedValue: mapping.displayedValue }))}
              handleSelectChange={(selectedValues) => handleDeliveryPeriodChange(selectedValues, deliveryPeriodOne, setdeliveryPeriodOne, form, index + 14)}
            />
          ))}
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          {labels.slice(14, 17).map((label, index) => (
            <CustomTimePicker
              key={index + 15}
              label={label}
              name={`input${index + 15}`}
              rules={[{ required: true, message: `Please enter ${label}` }]}
              hoveredInput={hoveredInput === index + 15}
              focusedInput={focusedInput === index + 15}
              handleMouseEnter={() => handleMouseEnter(index + 15)}
              handleMouseLeave={handleMouseLeave}
              handleFocus={() => handleFocus(index + 15)}
              handleBlur={handleBlur}
            />
          ))}
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          {labels.slice(17, 20).map((label, index) => (
            <CustomTimePicker
              key={index + 17}
              label={label}
              name={`input${index + 17}`}
              rules={[{ required: true, message: `Please enter ${label}` }]}
              hoveredInput={hoveredInput === index + 17}
              focusedInput={focusedInput === index + 17}
              handleMouseEnter={() => handleMouseEnter(index + 17)}
              handleMouseLeave={handleMouseLeave}
              handleFocus={() => handleFocus(index + 17)}
              handleBlur={handleBlur}
            />
          ))}
        </Card>
      </Col>
    </Row>
    <Form.Item>
      <Styled.SubmitButton primary htmlType="submit"   >
        Submit
      </Styled.SubmitButton>
    </Form.Item>
  </Form>
  );
};

export default WebsiteManagement;
