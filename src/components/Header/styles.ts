import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 10rem;

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
