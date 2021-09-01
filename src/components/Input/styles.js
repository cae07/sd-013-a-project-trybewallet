import styled from 'styled-components';

export const Label = styled
  .label`align-items: center;
  background: grey;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 2px;
  padding: 5px;
`;

export const Input = styled
  .input`border: 0;
  border-radius: 5px;
  margin: 5px;

  ::placeholder {
    text-align: center;
  }
`;
