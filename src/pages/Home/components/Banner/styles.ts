import styled from 'styled-components'

interface GridIconProps {
  variant: 'cart' | 'box' | 'clock' | 'coffee'
}

/* interface teste {
  cart: string
  box: string
  clock: string
  coffee: string
} */
const iconColorVariants: {
  cart: 'yellow-dark'
  box: 'base-text'
  clock: 'yellow'
  coffee: 'purple'
} = {
  cart: 'yellow-dark',
  box: 'base-text',
  clock: 'yellow',
  coffee: 'purple',
}

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  header h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.colors['base-title']};
    font-family: 'Baloo 2', sans-serif;
  }
  header h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;

  div {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }
`
export const GridIcon = styled.div<GridIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2rem;
  max-height: 2rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme.colors[iconColorVariants[props.variant]]};
`
