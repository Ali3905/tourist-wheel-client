import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Drawer, Space } from 'antd';
import { closeDrawer, selectDrawerOpen } from '../redux/drawerSlice';

const App = () => {
  const open = useSelector(selectDrawerOpen);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart ,"cart")
  const onClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <>
      <Drawer
        title="Transfer Order"
        placement={'right'}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
            {cart.some(item => item.quantity < 0) ? 'Transfer' : 'Purchase'}
            </Button>
          </Space>
        }
      >
        {cart.map((item) => {
          if (item.quantity !== 0) {
            return (
              <div key={item.data.id}>
                <img style={{width:'70px' , height:'70px'}} src={item.data.image} alt={item.data.name} />
                <p>{item.data.name}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            );
          }
          return null; // Don't render if quantity is 0
        })}
      </Drawer>
    </>
  );
};

export default App;
