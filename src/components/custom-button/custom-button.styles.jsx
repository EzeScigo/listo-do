import styled, { css } from 'styled-components';

const ButtonStyles = css`
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const removeTaskStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  width: 25px;
  height: 25px;
  align-self: flex-end;
  padding: 0px 0px 0px 0px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.removeTask) {
    return removeTaskStyles;
  } 
  
  return ButtonStyles;
};

export const CustomButtonContainer = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: 'Piazzolla';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  background-color: black;
  color: white;
  border: none;

  &:hover {
    filter: brightness(85%);
  }

  ${getButtonStyles};
`;