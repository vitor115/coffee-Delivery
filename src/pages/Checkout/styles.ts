import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const CheckoutContainer = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 10rem;
  gap: 2rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    align-self: flex-start;
    font-family: 'baloo 2', sans-serif;
  }

  aside {
    flex: 1;
  }

  .line {
    background: ${(props) => props.theme.colors['base-button']};
    width: 90%;
    height: 1px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`

export const OrderInfoContainer = styled(Container)`
  flex-direction: column;
  flex: 2;
  gap: 0.75rem;
`

export const CartInfoContainer = styled(Container)`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`

export const PricingFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  gap: 0.75rem;

  p {
    display: flex;
    justify-content: space-between;
  }

  button {
    background: ${(props) => props.theme.colors.yellow};
    border: none;
    padding: 0.75rem;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const InfoContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;

  header {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    grid-area: 1 / 1 / 2 / 7;

    > :first-child {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`
export const AddressInfo = styled(InfoContainer)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  #cep {
    grid-area: 2 / 1 / 3 / 3;
  }
  #rua {
    grid-area: 3 / 1 / 4 / 7;
  }
  #numero {
    grid-area: 4 / 1 / 5 / 3;
  }
  #complemento {
    grid-area: 4 / 3 / 5 / 7;
  }
  #bairro {
    grid-area: 5 / 1 / 6 / 3;
  }
  #cidade {
    grid-area: 5 / 3 / 6 / 6;
  }
  #uf {
    grid-area: 5 / 6 / 6 / 7;
  }

  input {
    background: ${(props) => props.theme.colors['base-input']};
    border-radius: 6px;
    width: 100%;
    border: none;
    padding: 0.75rem;
  }
`

export const PaymentInfo = styled(InfoContainer)`
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  header {
    > :nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`

export const PaymentMethodButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  background: ${(props) => props.theme.colors['base-button']};
  border: none;
  border-radius: 6px;
  min-width: 10.5rem;
  padding: 1rem;
  transition: all 0.3s;

  :hover {
    background: ${(props) => props.theme.colors['purple-light']};
    outline: ${(props) => props.theme.colors['purple-dark']};
  }

  > :first-child {
    color: ${(props) => props.theme.colors.purple};
  }

  p {
    font-size: 0.75rem;
  }
`
