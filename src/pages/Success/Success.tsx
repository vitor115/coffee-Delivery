import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { SuccessContainer } from './styles'
import successImage from '../../assets/success-image.svg'
import { GridIcon } from '../Home/components/Banner/styles'
import { useContext, useEffect } from 'react'
import { ItemsContext } from '../../context/ItemsContext'

export function Success() {
  const { orderInfo } = useContext(ItemsContext)

  useEffect(() => {
    console.log(orderInfo)
  }, [orderInfo])
  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </header>
      <section>
        <main>
          <div>
            <GridIcon variant="coffee">
              <MapPin size={16} color="white" weight="fill" />
            </GridIcon>

            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {orderInfo.street}, {orderInfo.number}
                </strong>
              </p>
              <p>
                {' '}
                {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
              </p>
            </div>
          </div>
          <div>
            <GridIcon variant="clock">
              <Timer size={16} color="white" weight="fill" />
            </GridIcon>

            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min </strong>
            </div>
          </div>
          <div>
            <GridIcon variant="cart">
              <CurrencyDollar size={16} color="white" weight="fill" />
            </GridIcon>

            <div>
              <p>Pagamento na entrega</p>
              <strong>
                {orderInfo.paymentMethod === 'credit'
                  ? 'Cartão de Crédito'
                  : ''}{' '}
                {orderInfo.paymentMethod === 'debit' ? 'Cartão de Débito' : ''}
                {orderInfo.paymentMethod === 'money' ? 'Dinheiro' : ''}
              </strong>
            </div>
          </div>
        </main>
        <aside>
          <img src={successImage} alt="" />
        </aside>
      </section>
    </SuccessContainer>
  )
}
