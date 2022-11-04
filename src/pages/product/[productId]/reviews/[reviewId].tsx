import { useRouter } from "next/router"

const Review = () => {

    const router = useRouter()
    const {reviewId, productId} = router.query

    return(
        <h1> Mostrar a reviews {reviewId} e mostrar detalhes do produtod {productId}</h1>
    )
}

export default Review