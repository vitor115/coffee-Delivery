import { Banner } from './components/Banner'
import { ItemCard } from './components/ItemCard'
import { Container, ItemsList } from './styles'

export function Home() {
  return (
    <Container>
      <Banner />
      <h2>Nossos Cafés</h2>
      <ItemsList>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ItemsList>
    </Container>
  )
}
