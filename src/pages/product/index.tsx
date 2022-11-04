import Link from 'next/link';
import React from 'react';
    
type Props = {
    productId: number
}

const product = ({productId = 1000}: Props) => {
    return (

    <>
    <Link href="/" >
        Home
    </Link>
    <Link href="/blog" >
        Blog
    </Link>
        <h1>Page Product</h1>

        <Link href="/product/1" >
            Produto 1
        </Link>
        <Link href="/product/2" >
            Produto 2
        </Link>
        <Link href="/product/3" replace>
            Produto 3
        </Link>
        <Link href={`/product/${productId}`} >
            Produto {productId}
        </Link>
    </>
  )
}

export default product;