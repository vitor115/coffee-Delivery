import { useContext } from 'react'
import { ItemsContext } from '../../context/ItemsContext'
import { Banner } from './components/Banner'
import { ItemCard } from './components/ItemCard'
import { Container, ItemsList } from './styles'

export function Home() {
  const { itemsList } = useContext(ItemsContext)
  return (
    <Container>
      <Banner />
      <h2>Nossos Cafés</h2>
      <ItemsList>
        {itemsList.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ItemsList>
    </Container>
  )
}
