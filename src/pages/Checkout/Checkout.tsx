import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { ItemsContext } from '../../context/ItemsContext'
import { ItemCart } from './components/ItemCart/ItemCart'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { number, object, string } from 'yup'

import {
  AddressInfo,
  CartInfoContainer,
  CheckoutContainer,
  OrderInfoContainer,
  PaymentInfo,
  PaymentMethodButton,
  PricingFooter,
} from './styles'

const schema = object({
  cep: number()
    .typeError('Digite somente os 8 números do CEP')
    .required('Digite o CEP da residência')
    .positive(),
  rua: string().required('Digite a Rua da residência'),
  numero: string().required('Digite o Número da residência'),
  complemento: string(),
  bairro: string().required('Digite o Bairro da residência'),
  cidade: string().required('Digite a Cidade da residência'),
  uf: string().required('Digite o Estado da cidade'),
  paymentMethod: string().required('Escolha um tipo de pagamento'),
})

export function Checkout() {
  const { checkoutList } = useContext(ItemsContext)
  const [selectedButton, setSelectedButton] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex)
    if (buttonIndex === 0) {
      setPaymentMethod('credit')
    } else if (buttonIndex === 1) {
      setPaymentMethod('debit')
    } else if (buttonIndex === 2) {
      setPaymentMethod('money')
    }
  }

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
  function sendCartInformation(data: any) {
    console.log(data)
  }
  function alertErrors() {
    if (errors.cep) {
      alert(errors.cep.message)
    } else if (errors.rua) {
      alert(errors.rua.message)
    } else if (errors.numero) {
      alert(errors.numero.message)
    } else if (errors.bairro) {
      alert(errors.bairro.message)
    } else if (errors.cidade) {
      alert(errors.cidade.message)
    } else if (errors.uf) {
      alert(errors.uf.message)
    }
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(sendCartInformation)}>
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
          <input
            type="number"
            id="cep"
            placeholder="CEP"
            {...register('cep')}
          />

          <input type="text" id="rua" placeholder="Rua" {...register('rua')} />
          <input
            type="text"
            id="numero"
            placeholder="Número"
            required
            {...register('numero')}
          />
          <input
            type="text"
            id="complemento"
            placeholder="Complemento"
            {...register('complemento')}
          />
          <input
            type="text"
            id="bairro"
            placeholder="Bairro"
            {...register('bairro')}
          />
          <input
            type="text"
            id="cidade"
            placeholder="Cidade"
            {...register('cidade')}
          />
          <input type="text" id="uf" placeholder="UF" {...register('uf')} />
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
            <PaymentMethodButton
              type="button"
              checked={selectedButton === 0}
              onClick={() => handleButtonClick(0)}
            >
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentMethodButton>
            <PaymentMethodButton
              type="button"
              checked={selectedButton === 1}
              onClick={() => handleButtonClick(1)}
            >
              <Bank size={16} />
              <p>CARTÃO DE DÉBITO</p>
            </PaymentMethodButton>
            <PaymentMethodButton
              type="button"
              checked={selectedButton === 2}
              onClick={() => handleButtonClick(2)}
            >
              <Money size={16} />
              <p>DINHEIRO</p>
            </PaymentMethodButton>
            <input
              type="text"
              id="buttonInput"
              {...register('paymentMethod')}
              value={paymentMethod}
            />
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
              onClick={alertErrors}
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
