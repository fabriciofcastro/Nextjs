import Link from "next/link";
import { useRouter } from "next/router"


const Doc = () => {

    const router = useRouter()
    const { params = [] } = router.query
    console.log(params);

    if (params.length === 2) {
        return (
            
            
             <h1>
                viewing docs feature === { params[0] } and concept === { params[1] }
            </h1>
   
        )
    } else if (params.length === 1) {
        return (
        
           <h1>Viewing docs for feature ==== { params[0] }</h1>
       
            
        )
    }


    return (

        <>
          <Link href="" >
            Home
          </Link>
          <Link href="/blog">
            Blog
          </Link>

            <h1>
                Docs Home Pages
            </h1>
        </>
    )
}
export default Doc