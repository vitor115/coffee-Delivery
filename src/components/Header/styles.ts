import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 10rem;

  @media (max-width: 1100px) {
    padding: 2rem;
  }
  @media (max-width: 350px) {
    padding: 1rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`
export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.37rem;
  width: 2.37rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  transition: 0.3s background;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors['yellow-light']};
  }
`
export const LocationButton = styled.div`
  height: 2.37rem;
  width: 8.9rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.purple};

  p {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`
export const ItemsCount = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 20px;
  height: 20px;
  right: 150px;
  top: 28px;
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  border-radius: 100%;
  color: ${(props) => props.theme.colors['base-button']};
  font-weight: bold;

  @media (max-width: 1100px) {
    position: absolute;
    right: 20px;
    top: 28px;
  }
  @media (max-width: 350px) {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`
