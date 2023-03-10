import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 10rem;
  padding-left: 10rem;
  gap: 6.75rem;

  @media (max-width: 1100px) {
    padding: 2rem;
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
  > * {
  }
`
