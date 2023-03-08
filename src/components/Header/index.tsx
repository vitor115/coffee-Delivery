import logo from '../../assets/coffee-logo.svg'
import { CartButton, Container, LocationButton } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <nav>
        <LocationButton title="Localização">
          <MapPin size={22} weight="fill" />
          <p>Sorocaba, SP</p>
        </LocationButton>
        <CartButton title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </Container>
  )
}
