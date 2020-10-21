import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  min-width: 130px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: 'Piazzolla';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    filter: brightness(85%);
  }
`;