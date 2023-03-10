import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 16rem;
  height: 19.5rem;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 1.25rem;
  border-radius: 6px 36px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      font-family: 'baloo 2', sans-serif;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
    p {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    #price {
      margin-left: 0.25rem;
      margin-right: auto;
      font-family: 'baloo 2', sans-serif;
      font-size: 24px;
    }
  }

  img {
    margin-top: -60px;
  }
`

export const ItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  margin-bottom: 1rem;
  margin-top: 0.75rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors['purple-dark']};
  min-width: 2.375rem;
  min-height: 2.375rem;
  border: none;
  border-radius: 6px;
  transition: 0.3s background-color;

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.purple};
  }
`
export const Acumulator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  width: 4.5rem;
  height: 2rem;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.purple};
  background: ${(props) => props.theme.colors['base-button']};
  transition: all 0.3s;

  #plus:hover,
  #minus:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors['purple-dark']};
  }

  #counter {
    color: ${(props) => props.theme.colors['base-title']};
  }
`
