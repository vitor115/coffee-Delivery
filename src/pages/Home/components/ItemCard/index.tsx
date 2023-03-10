import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'
import { Acumulator, AddToCartButton, CardContainer, ItemTag } from './styles'
import expresso from '../../../../assets/coffee-types/expresso.svg'

export function ItemCard() {
  return (
    <CardContainer>
      <header>
        <img src={expresso} alt="" />
        <ItemTag>TRADICIONAL</ItemTag>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </header>
      <footer>
        <div>
          <span>R$</span>
          <span id="price">9,90</span>
        </div>

        <Acumulator>
          <Minus id="minus" />
          <span id="counter">1</span>
          <Plus id="plus" />
        </Acumulator>
        <AddToCartButton type="submit">
          <ShoppingCartSimple weight="fill" color="white" size={22} />
        </AddToCartButton>
      </footer>
    </CardContainer>
  )
}
