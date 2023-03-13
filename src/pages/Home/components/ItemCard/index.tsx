import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'
import {
  Acumulator,
  AddToCartButton,
  CardContainer,
  ItemTag,
  ItemTagContainer,
} from './styles'
import { Item } from '../../../../context/ItemsContext'

interface ItemCardProps {
  item: Item
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <CardContainer>
      <header>
        <img src={item.image} alt="" />
        <ItemTagContainer>
          {item.category.map((category) => {
            return <ItemTag key={category}>{category.toUpperCase()}</ItemTag>
          })}
        </ItemTagContainer>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </header>
      <footer>
        <div>
          <span>R$</span>
          <span id="price">
            {item.price.toFixed(2).toString().replace('.', ',')}
          </span>
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
