import styled from 'styled-components';

export const TaskRemover = styled.div`
  width: auto;
  height: 20px;
  padding: 2px;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    transition: all 300ms;
  }

  &:active {
    transform: scale(0.85);
  }
`;

export const TaskCardContainer = styled.div`
  background: rgb(201, 225, 127); 
  max-width: 400px;
  width: 300px;
  height: auto;
  word-break: break-word;
  text-overflow: ellipsis;
  display: flex;
  padding: 5px 5px;
  margin: 10px 0px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 1px 10px 0px;
  transition: all 1s;
  
  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.5em;
    justify-content: center;
  }

  p {
    margin: none;
    font-size: 1em;
  }

  footer {
    font-size: 0.7em;
    align-self: flex-end;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 5px 1px;
    transform: scale(1.05);
    transition: all 1s; 
    }
`;