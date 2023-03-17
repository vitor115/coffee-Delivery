import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { checkoutItems, ItemsContext } from '../../../../context/ItemsContext'
import { Acumulator } from '../../../Home/components/ItemCard/styles'
import { RemoveButton, ItemCard } from './styles'

interface ItemCartProps {
  item: checkoutItems
}
export function ItemCart({ item }: ItemCartProps) {
  const { updateItemQuantity, deleteItem } = useContext(ItemsContext)

  function reduceItemQuantity() {
    if (item.quantity > 1) {
      updateItemQuantity(item, -1)
    }
  }
  function increaseItemQuantity() {
    if (item.quantity < 99) {
      updateItemQuantity(item, 1)
    }
  }

  function DeleteCurrentItem() {
    deleteItem(item)
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
                <button type="button" onClick={reduceItemQuantity}>
                  <Minus id="minus" />
                </button>
                <span id="counter">{item.quantity}</span>
                <button
                  type="button"
                  value={item.quantity}
                  onClick={increaseItemQuantity}
                >
                  <Plus id="plus" />
                </button>
              </Acumulator>
              <RemoveButton type="button" onClick={DeleteCurrentItem}>
                <Trash size={16} />
                <span>Remover</span>
              </RemoveButton>
            </div>
          </header>

          <p className="price">
            R$
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
