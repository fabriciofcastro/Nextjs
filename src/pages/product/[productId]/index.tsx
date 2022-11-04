import { useRouter } from "next/router"

const ProductList = () => {

    const router = useRouter()
    const productId = router.query.productId

    return(
        <h1>Detalhes do produto {productId}</h1>
    )
}

export default ProductList