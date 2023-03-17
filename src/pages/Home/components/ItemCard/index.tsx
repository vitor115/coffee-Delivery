import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'
import {
  Acumulator,
  AddToCartButton,
  CardContainer,
  ItemTag,
  ItemTagContainer,
} from './styles'
import { Item, ItemsContext } from '../../../../context/ItemsContext'
import { useContext, useState } from 'react'

interface ItemCardProps {
  item: Item
}

export function ItemCard({ item }: ItemCardProps) {
  const { addToCheckoutList, checkoutList, updateItemQuantity } =
    useContext(ItemsContext)
  const [itemQuantity, setItemQuantity] = useState(0)

  function handleAddToCart() {
    const isItemOnCheckout = checkoutList.map((i) => i.id).indexOf(item.id)
    if (itemQuantity > 0) {
      if (isItemOnCheckout === -1) {
        console.log(checkoutList)
        const itemWithQuantity = { ...item, quantity: itemQuantity }
        addToCheckoutList(itemWithQuantity)
      } else {
        updateItemQuantity(item, itemQuantity)
      }
    }
    setItemQuantity(0)
  }
  function reduceItemQuantity() {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1)
    }
  }
  function increaseItemQuantity() {
    if (itemQuantity < 99) {
      setItemQuantity(itemQuantity + 1)
    }
  }

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
          <button onClick={reduceItemQuantity}>
            <Minus id="minus" />
          </button>

          <span id="counter">{itemQuantity}</span>
          <button value={itemQuantity} onClick={increaseItemQuantity}>
            <Plus id="plus" />
          </button>
        </Acumulator>
        <AddToCartButton type="button" onClick={handleAddToCart}>
          <ShoppingCartSimple weight="fill" color="white" size={22} />
        </AddToCartButton>
      </footer>
    </CardContainer>
  )
}
