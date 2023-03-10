import logo from '../../assets/coffee-logo.svg'
import { CartButton, Container, ItemsCount, LocationButton } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const cartItemsCounter = 0
  return (
    <Container>
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <nav>
        <LocationButton title="Localização">
          <MapPin size={22} weight="fill" />
          <p>Sorocaba, SP</p>
        </LocationButton>
        <NavLink to="/checkout">
          <CartButton title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
            <div>
              {cartItemsCounter ? (
                <ItemsCount>{cartItemsCounter || ''}</ItemsCount>
              ) : (
                ''
              )}
            </div>
          </CartButton>
        </NavLink>
      </nav>
    </Container>
  )
}
