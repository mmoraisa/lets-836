import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../defaults/Colors'

export const Container = styled.article`
  background-color: #2a2f40;
  color: #fff;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`

export const PhotoArea = styled.div`
  background-color: ${PRIMARY_COLOR};
  border-radius: 0 50% 50% 0;
  height: 300px;
  width: 300px;
  position: relative;

  & img {
    position: absolute;
    top: -100px;
    left: -120px;
    pointer-events: none;
  }
`

export const InfoArea = styled.div`
  flex: 1;
  padding: 15px;
`
