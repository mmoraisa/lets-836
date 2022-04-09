import styled from 'styled-components'

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
    right: 249px;
    box-shadow: 0px 0px 0px rgb(0 0 0 / 0%);
  `}
`

export const CartArea = styled.div`
  background: #dfdfdf;
  box-shadow: 0px 0px 0px rgb(0 0 0 / 0%);
  width: 250px;
  height: 300px;
  padding: 20px;
  position: fixed;
  right: -250px;
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
