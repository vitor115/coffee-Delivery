import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 10rem;
  padding-left: 10rem;

  @media (max-width: 1100px) {
    padding: 2rem;
  }

  > h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'baloo 2', sans-serif;
    align-self: flex-start;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 3.37rem;
  }
  @media (max-width: 620px) {
    h2 {
      align-self: center;
    }
  }
  > :first-child {
    margin-bottom: 6.75rem;
  }
`
export const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 1150px;

  @media (max-width: 620px) {
    justify-content: center;
  }
`
