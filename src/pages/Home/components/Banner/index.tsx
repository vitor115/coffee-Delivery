import { BannerContainer, GridContainer, GridIcon } from './styles'
import bannerImage from '../../../../assets/banner-image.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <article>
        <header>
          <h1>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </header>
        <GridContainer>
          <div>
            <GridIcon variant="cart">
              <ShoppingCart weight="fill" color="white" size={16} />
            </GridIcon>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <GridIcon variant="box">
              <Package weight="fill" color="white" size={16} />
            </GridIcon>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <GridIcon variant="clock">
              <Timer weight="fill" color="white" size={16} />
            </GridIcon>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <GridIcon variant="coffee">
              <Coffee weight="fill" color="white" size={16} />
            </GridIcon>
            <p>O café chega fresquinho até você</p>
          </div>
        </GridContainer>
      </article>
      <img src={bannerImage} alt="" id="bannerimage" />
    </BannerContainer>
  )
}
