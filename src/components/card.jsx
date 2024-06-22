// CardStyles.js
import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  padding: 16px 16px 0px 16px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  margin-bottom: 16px;

  .ant-form-item {
    display: block;
    margin-bottom: 16px;

    label {
      margin-bottom: 8px;
      display: block;
    }

    .ant-time-picker {
      width: 100%;
    }

    .ant-input {
      width: 100%;
    }

    .ant-select {
      width: 100%;
    }
  }
`;

export const FormWrapper = styled.div`
  padding: 20px;
`;
