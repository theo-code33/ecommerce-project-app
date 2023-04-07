import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LastProduct from '@/components/product/LastProduct'
import productServices from '@/services/product.service'
import { PropsHome } from '@/types/generics.types'
import LastCategories from '@/components/category/LastCategories'
import categoryService from '@/services/category.service'

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC<PropsHome> = ({products, categories}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Ecommerce app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <LastProduct products={products}/>
          <LastCategories categories={categories} />
      </main>
    </>
  )
}

export default Home

const getStaticProps = async () => {
  const products = await productServices.getLastProducts()
  const categories = await categoryService.getLastCategories()
  return {
    props: {
      products,
      categories
    }
  }
}

export {getStaticProps}