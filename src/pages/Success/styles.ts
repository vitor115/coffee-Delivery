import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem 10rem;
  gap: 2.5rem;

  header {
    h1 {
      font-size: 2rem;
      color: ${(props) => props.theme.colors['yellow-dark']};
      font-family: 'baloo 2', sans-serif;
    }
    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }

  section {
    display: flex;
    width: 100%;
    gap: 6.37rem;
    align-items: center;
    justify-content: flex-start;

    main {
      display: flex;
      flex-direction: column;
      padding: 2.5rem;
      gap: 2rem;
      background: linear-gradient(#fafafa, #fafafa) padding-box,
        linear-gradient(to right, #dbac2c, #8047f8) border-box;
      border-radius: 6px 36px;
      border: 1px solid transparent;

      > div {
        display: flex;
        align-items: center;
        justify-items: center;
        min-width: 2rem;
        min-height: 2rem;
        gap: 0.75rem;

        > :first-child {
          margin-bottom: 0;
        }
      }
    }

    aside {
    }
  }
`
