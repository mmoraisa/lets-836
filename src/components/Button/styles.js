import styled from 'styled-components'

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 12px;
  font-weight: 300;
  opacity: 1;
  padding: 0;
  transition: .15s opacity ease;

  &:hover {
    opacity: .75;
  }

  & svg {
    margin-right: 10px;
  }

  ${({ selected }) => selected && `
    border-radius: 5px;
    background: rgba(255,255,255,.2);
    font-weight: 800;
  `}
`
