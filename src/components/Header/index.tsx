import logo from '../../assets/coffee-logo.svg'
import { CartButton, Container, ItemsCount, LocationButton } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ItemsContext } from '../../context/ItemsContext'

export function Header() {
  const { checkoutList } = useContext(ItemsContext)
  useEffect(() => {}, [checkoutList])
  function itemsQuantityInCheckout() {
    let totalQuantity = 0
    // eslint-disable-next-line array-callback-return
    checkoutList.map((item) => {
      if (item.quantity) {
        totalQuantity += item.quantity
      }
    })
    return totalQuantity
  }
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
              {checkoutList.length ? (
                <ItemsCount>{itemsQuantityInCheckout() || ''}</ItemsCount>
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
