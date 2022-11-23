import client from "../../client"
import { useRouter } from "next/router"
import Link from "next/link"
import groq from "groq"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"

const Product = ({ products }) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Cones</h1>
        <ul>
          {products.length > 0 &&
            products.map(
              ({
                _id,
                title = "",
                slug = "",
                lengthFull = "",
                lengthFilter = "",
              }) =>
                slug && (
                  <li key={_id}>
                    <Link
                      href="/product/[slug]"
                      as={`/product/${slug.current}`}
                    >
                      <h2 className="text-stablesOrange">{title}</h2>
                      <span className="font-thin"></span>
                      {lengthFull} / {lengthFilter}
                    </Link>
                  </li>
                )
            )}
        </ul>
      </main>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
         
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const products = await client.fetch(groq`
      *[_type == "product"] | order(publishedAt desc)
    `)
  return {
    props: {
      products,
    },
  }
}

export default Product
