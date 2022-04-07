import styled from 'styled-components';
import Button from '../../Button';

export const SizeArea = styled.div`
  display: flex;
  align-items: center;  
  margin-bottom: 10px;

  & Button {
    margin: 0 5px;
    height: 20px;
    width: 20px;
  }
  

  & Button:first-of-type {
    margin-left: 30px;
  }
`

export const ColorArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & > button {
    margin: 0 10px;
  }

  & > button:first-of-type {
    margin-left: 30px;
  }
`
