import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: #fcfcfc;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px 10px;

  & p {
    margin: 0;
  }

  & img {
    width: 90px;
    height: 90px;
  }
`

export const Description = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`

export const Setttings = styled.div`
  align-items: center;
  display: flex;

  & :first-child {
    margin-right: 10px;
  }
`

export const Price = styled.div`
  align-items: center;
  display: flex;

  & :first-child {
    margin-right: 10px;
  }

  & input {
    border: none;
    outline: none;
    width: 36px;
  }
`
