import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { Checkout } from './pages/Checkout/Checkout'
import { Home } from './pages/Home/Home'
import { Success } from './pages/Success/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
