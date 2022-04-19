import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../../defaults/Colors'

export const Collection = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 0;
`

export const ModelLine = styled.h3`
  color: ${PRIMARY_COLOR};
  margin-bottom: 50px;
`

export const ModelDescription = styled.p`
  font-size: 24px;
  margin: 0 0 5px 0;
`

export const PriceArea = styled.div`
  display: flex;
`

export const Price = styled.p`

  ${({ scratched }) => scratched && `
    text-decoration: line-through;
    text-decoration-color: red;
  `}

  &::before {
    content: '$';
  }

  &:first-of-type {
    margin-right: 20px;
  }
`
