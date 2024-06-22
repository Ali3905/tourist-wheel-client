import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/card';
import { Form, Select, Col, Row } from 'antd';
import CommonFields from './commonFeilds';
import CommonMultiFeilds from './commonMultiFeilds';
import { singleInputLabel, multiInputLabel } from "./addProductConstants"
const { Option } = Select;

function AddProduct() {
  const [productImage, setProductImage] = useState(null);
  const [isMultipleProducts, setIsMultipleProducts] = useState('single');

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    const storedProductType = localStorage.getItem('productType');
    console.log(storedProductType, "storedProductType");
    if (storedProductType) {
      setIsMultipleProducts(storedProductType);
    }
  }, []);

  const handleDropdownChange = (value) => {
    setIsMultipleProducts(value);
    localStorage.setItem('productType', value);
  };


  return (
    <>
      {
        isMultipleProducts === "single" ?
          <div>
            <Form.Item label="Select Product Type" name="productType">
              <Select value={isMultipleProducts} onChange={handleDropdownChange} placeholder="select multiple if required">
                <Option value="single">Single Product</Option>
                <Option value="multiple">Multiple Products</Option>
              </Select>
            </Form.Item>
            <Col span={24}>
              <Card>
                <div {...formItemLayout}>
                  <Row gutter={24}>
                    <Col span={12}>
                      {singleInputLabel.slice(0, 6).map((field, index) => (
                        <CommonFields
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                    <Col span={12}>
                      {singleInputLabel.slice(6, 10).map((field, index) => (
                        <CommonFields
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                  </Row>
                </div>
              </Card>
              <Card>
                <div {...formItemLayout}>
                  <Row gutter={24} style={{ display: "flex" }}>
                    <Col span={12}>
                      {singleInputLabel.slice(10, 13).map((field, index) => (
                        <CommonFields
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                    <Col span={12}>
                    {singleInputLabel.slice(13, 15).map((field, index) => (
                          <CommonFields
                            key={index}
                            field={field}
                            setProductImage={setProductImage}
                            productImage={productImage}
                          />
                        ))}
                    </Col>
                  </Row>
                </div>
              </Card>
              <Card>
                <div {...formItemLayout}>
                  <Row gutter={24} >
                    <Col span={12}>
                      <div style={{ display: "flex" }}>
                      {singleInputLabel.slice(15, 18).map((field, index) => (
                        <CommonFields
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                      </div>
            
                    </Col>
                    <Col span={12}>
                    {singleInputLabel.slice(18, 22).map((field, index) => (
                          <CommonFields
                            key={index}
                            field={field}
                            setProductImage={setProductImage}
                            productImage={productImage}
                          />
                        ))}
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </div> :
<div>
<Form.Item label="Select Product Type" name="productType">
              <Select value={isMultipleProducts} onChange={handleDropdownChange} placeholder="select single if required">
                <Option value="single">Single Product</Option>
                <Option value="multiple">Multiple Products</Option>
              </Select>
            </Form.Item>
            <Col span={24}>
              <Card>
                <div {...formItemLayout}>
                  <Row gutter={24}>
                    <Col span={12}>
                      {multiInputLabel.slice(0, 5).map((field, index) => (
                        <CommonMultiFeilds
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                    <Col span={12}>
                      {multiInputLabel.slice(5, 8).map((field, index) => (
                        <CommonMultiFeilds
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                  </Row>
                </div>
              </Card>
              <Card>
                <div {...formItemLayout}>
                  <Row gutter={24} style={{ display: "flex" }}>
                    <Col span={12}>
                      {multiInputLabel.slice(8, 12).map((field, index) => (
                        <CommonMultiFeilds
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                    <Col span={12}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {multiInputLabel.slice(12, 15).map((field, index) => (
                          <CommonMultiFeilds
                            key={index}
                            field={field}
                            setProductImage={setProductImage}
                            productImage={productImage}
                          />
                        ))}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
              <Card>
                <div {...formItemLayout}>
                  <Row gutter={24} style={{ display: "flex" }}>
                    <Col span={12}>
                      {multiInputLabel.slice(15, 19).map((field, index) => (
                        <CommonMultiFeilds
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                    <Col span={12}>
                    {multiInputLabel.slice(19, 21).map((field, index) => (
                          <CommonMultiFeilds
                            key={index}
                            field={field}
                            setProductImage={setProductImage}
                            productImage={productImage}
                          />
                        ))}
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
</div>
      }
    </>

  );
}

export default AddProduct;


