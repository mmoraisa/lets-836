import styled from 'styled-components'

export const StyledContainer = styled.div`
  
  ${({ color }) => color && `
    background-color: ${color};
  `}

  border-radius: 50%;
  cursor: pointer;
  height: 15px;
  width: 15px;
  transition: .15s transform ease;
  transform: scale(1);

  &:hover {
    transform: scale(1.2);
  }
`
