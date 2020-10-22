import styled from 'styled-components';

export const TaskRemover = styled.div`
  width: 25px;
  height: 25px;
  align-self: flex-end;
  padding: 0px 0px 0px 0px;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }

  &:active {
    transform: scale(0.85);
  }
`;

export const TaskCardContainer = styled.div`
  background: burlywood; 
  width: 40vh;
  min-width: 200px;
  height: 170px;
  display: flex;
  padding: 5px 5px;
  margin: 10px;
  justify-content: stretch;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px 20px 10px rgba(255, 255, 255, 0.2);
  overflow: auto;
  
  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 2em;
  }

  p {
    margin: none;
    font-size: 1em;
  }

  &:hover {
    opacity: 0.9;
    }
`;