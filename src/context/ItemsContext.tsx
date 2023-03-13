import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import americano from '../assets/coffee-types/americano.svg'
import arabe from '../assets/coffee-types/arabe.svg'
import cafeComLeite from '../assets/coffee-types/cafe-com-leite.svg'
import cafeGelado from '../assets/coffee-types/cafe-gelado.svg'
import chocolateQuente from '../assets/coffee-types/chocolate-quente.svg'
import cubano from '../assets/coffee-types/cubano.svg'
import expressoCremoso from '../assets/coffee-types/expresso-cremoso.svg'
import expresso from '../assets/coffee-types/expresso.svg'
import havaiano from '../assets/coffee-types/havaiano.svg'
import irlandes from '../assets/coffee-types/irlandes.svg'
import latte from '../assets/coffee-types/latte.svg'
import macchiato from '../assets/coffee-types/macchiato.svg'
import mocaccino from '../assets/coffee-types/mocaccino.svg'
import capuccino from '../assets/coffee-types/capuccino.svg'

export interface Item {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: [string]
  quantity?: number
}

interface ItemsContextType {
  itemsList: Item[]
  checkoutList: Item[]
  addToCheckoutList: (item: Item) => void
}
export const ItemsContext = createContext({
  itemsList: [
    {
      id: uuidv4(),
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: expresso,
      category: ['Tradicional'],
    },
    {
      id: uuidv4(),
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 800.9,
      image: americano,
      category: ['Tradicional'],
    },
    {
      id: uuidv4(),
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 90.9,
      image: expressoCremoso,
      category: ['Tradicional'],
    },
    {
      id: uuidv4(),
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image: cafeGelado,
      category: ['Tradicional', 'Gelado'],
    },
    {
      id: uuidv4(),
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image: cafeComLeite,
      category: ['Tradicional', 'com leite'],
    },
    {
      id: uuidv4(),
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image: latte,
      category: ['Tradicional', 'com leite'],
    },
    {
      id: uuidv4(),
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image: capuccino,
      category: ['Tradicional', 'com leite'],
    },
    {
      id: uuidv4(),
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image: macchiato,
      category: ['Tradicional', 'com leite'],
    },
    {
      id: uuidv4(),
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image: mocaccino,
      category: ['Tradicional', 'com leite'],
    },
    {
      id: uuidv4(),
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      image: chocolateQuente,
      category: ['especial', 'com leite'],
    },
    {
      id: uuidv4(),
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image: cubano,
      category: ['Tradicional', 'alcoólico', 'gelado'],
    },
    {
      id: uuidv4(),
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image: havaiano,
      category: ['especial'],
    },
    {
      id: uuidv4(),
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      image: arabe,
      category: ['especial'],
    },
    {
      id: uuidv4(),
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image: irlandes,
      category: ['especial', 'alcoólico'],
    },
  ],
} as ItemsContextType)

interface ItemsContextProviderProps {
  children: ReactNode
}
export function ItemsContextProvider({ children }: ItemsContextProviderProps) {
  const { itemsList } = useContext(ItemsContext)
  const [checkoutList, setChekoutList] = useState<Item[]>([])

  function addToCheckoutList(item: Item) {
    setChekoutList([...checkoutList, item])
  }
  return (
    <ItemsContext.Provider
      value={{ itemsList, checkoutList, addToCheckoutList }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
