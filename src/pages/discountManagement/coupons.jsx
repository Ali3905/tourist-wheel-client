import React, { useState } from 'react';
import { couponConstants } from './couponsConstants';
import { Card } from '../../components/card';
import CommonFields from '../../pages/subpages/addProduct/commonFeilds';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

function Coupons() {
  const [productImage, setProductImage] = useState(null);
  const formData = useSelector((state) => state.form.FormDetails);

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <Col span={9}>
      <Card  style={{ height: '278px' }}>
        {formData.map((data, index) => {
          if (data.formType === 'coupons') {
            return (
                <div key={index}>
                  <h3>{data.values.CouponName}</h3>
                  <p>Coupon Type: {data.values.couponType}</p>
                  <p>Coupon Code: {data.values.CouponCode}</p>
                  {/* Render other values as needed */}
                </div>
          
            );
          }
          return null;
        })}
            </Card>
      </Col>
      <Col span={14}>
        <Card>
          <div {...formItemLayout}>
            <Row gutter={24}>
              <Col span={12}>
                {couponConstants.slice(0, 3).map((field, index) => (
                  <CommonFields
                    key={index}
                    field={field}
                    setProductImage={setProductImage}
                    productImage={productImage}
                  />
                ))}
              </Col>
              <Col span={12}>
                {couponConstants.slice(3, 6).map((field, index) => (
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

export default Coupons;
