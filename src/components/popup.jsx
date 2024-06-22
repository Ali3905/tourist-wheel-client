import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import { closePopup } from '../redux/popupSlice';
import { Col, Row, Radio } from 'antd';
import { Card } from '../components/card';
import CommonFields from '../pages/subpages/addProduct/commonFeilds';
import { catogeryPopupLabel, transferPopupLabel } from './popupConstants';
import Product from '../jsonData/product.json';
import ProductCard from '../pages/userScreenManagement/userScreenManagementComponents/productCard';
import Search from './search';
import AddButton from './addButton';


const ProductGridContainer = styled.div`
  display: grid;
  place-items:center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

const Popup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.popup.isOpen);
  const selectedItem = useSelector((state) => state.sidebar.selectedParentIndex);
  const [productImage, setProductImage] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleClosePopup = () => {
    dispatch(closePopup());
  };

  const handleSearchChange = (value) => {
    console.log(value)
  };

  const handleRadioChange = e => {
    setSelectedPosition(e.target.value);
  };

  const selectedProducts = useSelector(state => state.Products.selectedProducts);
  console.log(selectedProducts, "selectedProducts")

  // const handleClickCard = (item) => {
  //   const selectedIndex = selectedProducts?.findIndex(selectedProduct => selectedProduct.id === item.id);
  //   if (selectedIndex !== -1) {
  //     dispatch(setSelectedProducts(item));
  //   } else {
  //     dispatch(setSelectedProducts(item));
  //   }
  // };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClosePopup}>
        {selectedItem === 11 && (
          <ModalContent style={{ minWidth: '80%', maxHeight: "80%", zIndex: '10', position: 'relative' }}>
            <>
              <ModalHeader className="flex flex-col gap-1">Add products</ModalHeader>
              <ModalBody>
                <Search onSearchChange={handleSearchChange} width="100%" />
                <ProductGridContainer>
                  {Product.map((item, index) => (
                    <ProductCard
                      key={index}
                      cardData={item}
                    />
                  ))}
                </ProductGridContainer>
               
    
              
              </ModalBody>
              <div style={{ position: 'absolute', bottom: 10, width: '100%', textAlign: 'center' }}>
                    <AddButton />
                  </div>
            </>
          </ModalContent>

        )}

        {selectedItem === 5 && (
          <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">Transfer Order</ModalHeader>
              <ModalBody>
                <Card>
                  <Row gutter={24}>
                    <Col span={12}>
                      {transferPopupLabel.slice(0, 1).map((field, index) => (
                        <CommonFields
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                  </Row>
                </Card>
              </ModalBody>
            </>
          </ModalContent>
        )}

        {selectedItem !== 11 && selectedItem !== 5 && (
          <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">Create Category</ModalHeader>
              <ModalBody>
                <Card>
                  <Row gutter={24}>
                    <Col span={12}>
                      {catogeryPopupLabel.slice(0, 3).map((field, index) => (
                        <CommonFields
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                    <Col span={12}>
                      {catogeryPopupLabel.slice(3, 5).map((field, index) => (
                        <CommonFields
                          key={index}
                          field={field}
                          setProductImage={setProductImage}
                          productImage={productImage}
                        />
                      ))}
                    </Col>
                  </Row>
                </Card>
                <Radio.Group onChange={handleRadioChange} value={selectedPosition}>
                  <Radio value="first">Add at First</Radio>
                  <Radio value="last">Add at Last</Radio>
                </Radio.Group>
              </ModalBody>
            </>
          </ModalContent>
        )}

      </Modal>
    </>
  );
};

export default Popup;
