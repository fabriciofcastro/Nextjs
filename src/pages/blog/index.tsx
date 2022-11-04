import Link from 'next/link';

const blog = () => {
    return (
        <>
            <Link href="/">
              HOME
            </Link>
            <Link href="/product" >
                Product
            </Link>

            <h1>Page Blog</h1>
        </>
    )
}

export default blog;