import styled, { css } from 'styled-components';

const ButtonStyles = css`
`;

const SmallButton = css`
  font-size: 11px;
`;

const getButtonStyles = props => {
  return ButtonStyles;
};

const getButtonSize = props => {
  if (props.smallButton) {
    return SmallButton;
  }
};

export const CustomButtonContainer = styled.button`
  margin: 10px;
  padding: 10px;
  min-width: 100px;
  height: auto;
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;
  font-family: 'Piazzolla';
  font-weight: bolder;
  cursor: pointer;
  background-color: rgb(0, 111, 111);
  color: white;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 10px 0px;

  &:hover {
    filter: brightness(85%);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 15px 0px;
  };

  &:active {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 5px 0px;
  };

  ${getButtonStyles};
  ${getButtonSize};
`;

