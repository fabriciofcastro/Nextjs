import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home() {

  const router = useRouter() 
  
  function product() {
      console.log('oi');
      router.replace('/product')
      
  }
  return (
    <>
      <h1>Home Page</h1>

      <Link href="/blog" >
        Blog
      </Link>
      <Link href="/product" replace>
        Product
      </Link>

      <button onClick={product} >Finalizar pedido</button>
    </>
  )
}
