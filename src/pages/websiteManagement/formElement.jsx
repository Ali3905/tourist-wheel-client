// FormElement.js
import React from 'react';
import { Form, TimePicker, Select, Input, Row, Col, Divider } from 'antd';

const { Option } = Select;


const CustomTimePicker = ({ label, name, rules, hoveredInput, focusedInput, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur }) => (
  <Row gutter={[16, 16]}>
    <Col span={24}>
      <Form.Item
        label={label}
        name={name}
        rules={rules}
      >
        <TimePicker
          format="HH:mm"
          style={{ width: '100%' }}
          className={`${(hoveredInput || focusedInput) ? 'time-picker' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Form.Item>
    </Col>
  </Row>
);

const CustomInput = ({ label, name, rules }) => (
  <Row gutter={[16, 16]}>
    <Col span={24}>
      <Form.Item
        label={label}
        name={name}
        rules={rules}
      >
        {label.includes('Limit') ? <Input type="number" /> : <Input />}
      </Form.Item>
    </Col>
  </Row>
);

const CustomSelect = ({ label, name, rules, options, handleSelectChange }) => (
  <Row gutter={[16, 16]}>
    <Col span={24}>
      <Form.Item
        label={label}
        name={name}
        rules={rules}
      >
        <Select
          mode="multiple"
          placeholder={`Select ${label.toLowerCase()}`}
          dropdownRender={(menu) => (
            <div>
              {menu}
              <Divider style={{ margin: '4px 0' }} />
            </div>
          )}
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <Option key={option.originalValue} value={option.originalValue}>
              {option.displayedValue}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Col>
  </Row>
);

const MultiSelectWithTyping = ({ label, name, rules, options, handleChange }) => {

  return (

    <Row gutter={[16, 16]}>
    <Col span={24}>
      <Form.Item
        label={label}
        name={name}
        rules={rules}
      >
        <Select
        mode="tags"
        style={{ width: '100%' }}
        onChange={handleChange}
        notFoundContent={null} 
          placeholder={`Select ${label.toLowerCase()}`}
          dropdownRender={(menu) => (
            <div>
              {menu}
              <Divider style={{ margin: '4px 0' }} />
            </div>
          )}
        >
          {options.map((option) => (
            <Option key={option.originalValue} value={option.originalValue}>
              {option.displayedValue}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Col>
  </Row>

  );
};



export { CustomTimePicker, CustomInput, CustomSelect , MultiSelectWithTyping };
