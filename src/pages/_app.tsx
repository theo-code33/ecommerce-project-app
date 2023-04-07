import { OrderProvider } from '@/context/cart.context'
import { UserProvider } from '@/context/user.context'
import MainLayout from '@/layout/MainLayout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <OrderProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </OrderProvider>
    </UserProvider>
  )
}