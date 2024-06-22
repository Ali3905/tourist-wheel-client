import React, { useState } from 'react';
import { RefundInputs } from '../pages/discountManagement/couponsConstants';
import { Card } from '../components/card';
import CommonFields from '../pages/subpages/addProduct/commonFeilds';
import { Col, Row } from 'antd';


function Refund() {
  const [productImage, setProductImage] = useState(null);


  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>

      <Col span={24}>
        <Card>
          <div {...formItemLayout}>
            <Row gutter={24}>
              <Col span={12}>
                {RefundInputs.slice(0, 3).map((field, index) => (
                  <CommonFields
                    key={index}
                    field={field}
                    setProductImage={setProductImage}
                    productImage={productImage}
                  />
                ))}
              </Col>
              <Col span={12}>
                {RefundInputs.slice(3, 6).map((field, index) => (
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
    </div>
  );
}

export default Refund;
