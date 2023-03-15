import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { ItemsContext } from '../../context/ItemsContext'
import { ItemCart } from './components/ItemCart/ItemCart'

import {
  AddressInfo,
  CartInfoContainer,
  CheckoutContainer,
  OrderInfoContainer,
  PaymentInfo,
  PaymentMethodButton,
  PricingFooter,
} from './styles'

export function Checkout() {
  const { checkoutList } = useContext(ItemsContext)

  function calculateTotalPriceOfItems() {
    let total = 0
    // eslint-disable-next-line array-callback-return
    checkoutList.map((item) => {
      if (item.quantity) {
        total += item.price * item.quantity
        return item.price * item.quantity
      }
    })
    return total
  }

  const totalPriceItems = calculateTotalPriceOfItems()
  const deliveryFee = 3.5
  const totalPriceWithDeliveryFee = totalPriceItems + deliveryFee

  /*   const { addToCheckoutList } = useContext(ItemsContext) */
  function sendCartInformation(event: Event) {
    event.preventDefault()
    alert('Teste')
  }

  return (
    <CheckoutContainer onSubmit={sendCartInformation}>
      <OrderInfoContainer>
        <h2>Complete seu pedido</h2>
        <AddressInfo>
          <header>
            <div>
              <MapPinLine size={22} />
            </div>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <input type="text" id="cep" placeholder="CEP" />
          <input type="text" id="rua" placeholder="Rua" />
          <input type="text" id="numero" placeholder="Número" />
          <input type="text" id="complemento" placeholder="Complemento" />
          <input type="text" id="bairro" placeholder="Bairro" />
          <input type="text" id="cidade" placeholder="Cidade" />
          <input type="text" id="uf" placeholder="UF" />
        </AddressInfo>
        <PaymentInfo>
          <header>
            <div>
              <CurrencyDollar size={22} />
            </div>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <div>
            <PaymentMethodButton type="button">
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentMethodButton>
            <PaymentMethodButton type="button">
              <Bank size={16} />
              <p>CARTÃO DE DÉBITO</p>
            </PaymentMethodButton>
            <PaymentMethodButton type="button">
              <Money size={16} />
              <p>DINHEIRO</p>
            </PaymentMethodButton>
          </div>
        </PaymentInfo>
      </OrderInfoContainer>
      <aside>
        <h2>Cafés selecionados</h2>
        <CartInfoContainer>
          {checkoutList.map((item) => (
            <ItemCart key={item.id} item={item} />
          ))}
          <hr />

          <PricingFooter>
            <p>
              <span>Total de items</span>
              <span>
                R$ {totalPriceItems.toFixed(2).toString().replace('.', ',')}
              </span>
            </p>

            <p>
              <span>Entrega</span>
              <span>
                R$ {deliveryFee.toFixed(2).toString().replace('.', ',')}
              </span>
            </p>

            <div className="total">
              <h3>Total</h3>
              <h3>
                R${' '}
                {totalPriceWithDeliveryFee
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}
              </h3>
            </div>
            <button
              type="submit"
              disabled={
                checkoutList.length === 0 ||
                totalPriceItems === 0 ||
                totalPriceWithDeliveryFee === 0
              } /* onClick={() => checkoutList()} */
            >
              CONFIRMAR PEDIDO
            </button>
          </PricingFooter>
        </CartInfoContainer>
      </aside>
    </CheckoutContainer>
  )
}
