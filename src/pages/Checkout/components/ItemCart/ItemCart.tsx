import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Item, ItemsContext } from '../../../../context/ItemsContext'
import { Acumulator } from '../../../Home/components/ItemCard/styles'
import { RemoveButton, ItemCard } from './styles'

interface ItemCartProps {
  item: Item
}
export function ItemCart({ item }: ItemCartProps) {
  const { updateItemQuantity } = useContext(ItemsContext)

  function reduceItemQuantity() {
    if (item.quantity > 0) {
      updateItemQuantity(item, -1)
    }
  }
  function increaseItemQuantity() {
    if (item.quantity < 99) {
      updateItemQuantity(item, 1)
    }
  }

  return (
    <>
      <ItemCard>
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <header>
            <h3>{item.name}</h3>
            <div id="actions">
              <Acumulator>
                <button onClick={reduceItemQuantity}>
                  <Minus id="minus" />
                </button>
                <span id="counter">{item.quantity}</span>
                <button value={item.quantity} onClick={increaseItemQuantity}>
                  <Plus id="plus" />
                </button>
              </Acumulator>
              <RemoveButton>
                <span>Remover</span>
                <Trash size={16} />
              </RemoveButton>
            </div>
          </header>

          <p className="price">
            R${' '}
            {(item.price * item.quantity)
              .toFixed(2)
              .toString()
              .replace('.', ',')}
          </p>
        </div>
      </ItemCard>
      <div className="line"></div>
    </>
  )
}
