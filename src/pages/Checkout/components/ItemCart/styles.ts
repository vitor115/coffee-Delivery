import styled from 'styled-components'
import { Acumulator } from '../../../Home/components/ItemCard/styles'

export const ItemCard = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;

  img {
    width: 20%;
  }

  > div {
    display: flex;
    width: 100%;
    gap: 1.25rem;
    justify-content: space-around;
  }
  header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    font-weight: 400;
  }

  #actions {
    display: flex;
    gap: 1.25rem;
  }

  .price {
    font-weight: bold;
  }
`

export const RemoveButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  padding: 0.5rem;
  background: ${(props) => props.theme.colors['base-button']};
  border: 0;
  color: ${(props) => props.theme.colors.purple};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme.colors['base-text']};
  }
`
