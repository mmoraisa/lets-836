import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../defaults/Colors'

export const CartButton = styled.button`
  background: #dfdfdf;
  border: none;
  border-radius: 10px 0 0 10px;
  box-shadow: 3px 3px 7px rgb(0 0 0 / 10%);
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  outline: none;
  position: fixed;
  right: 0;
  text-align: center;
  top: 40px;
  transition: .5s right ease, .5s box-shadow ease;
  width: 30px;
  z-index: 1001;

  ${({ open }) => open && `
    right: 349px;
    box-shadow: 0px 0px 0px rgb(0 0 0 / 0%);
  `}

  &::before {
    background: ${PRIMARY_COLOR};
    border-radius: 50%;
    content: '';
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    height: 16px;
    line-height: 16px;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 16px;
    opacity: 0;
    transform: scale(.5);
    transition: .15s opacity ease, .15s transform ease;

    ${({ qty }) => qty && `
      content: '${qty}';
      opacity: 1;
      transform: scale(1);
    `}
  }
`

export const CartArea = styled.div`
  background: #dfdfdf;
  box-shadow: 0px 0px 0px rgb(0 0 0 / 0%);
  width: 350px;
  height: 300px;
  padding: 20px;
  position: fixed;
  right: -350px;
  z-index: 1000;
  height: 100%;
  top: 0;
  transition: .5s right ease, .5s box-shadow ease;

  ${({ open }) => open && `
    right: 0;
    box-shadow: -3px -3px 10px rgba(0,0,0,.3);
  `}

  & h2 {
    font-size: 16px;
  }
`

export const TotalArea = styled.div`
  border-top: 1px solid #cfcfcf;
  margin-top: 30px;
  font-size: 16px;
  padding: 20px 0px;
`

export const BtnClean = styled.button`
  border: none;
  background: ${PRIMARY_COLOR};
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  text-transform: uppercase;
  outline: none;
  padding: 10px;
  width: 100%;
`
