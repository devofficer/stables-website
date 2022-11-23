import client from "../../client"
import { useRouter } from "next/router"
import Link from "next/link"
import groq from "groq"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"

const Blog = ({ posts }) => {
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
        <h1>Blogs</h1>
        <ul>
          {posts.length > 0 &&
            posts.map(
              ({
                _id,
                title = "",
                slug = ""
              }) =>
                slug && (
                  <li key={_id}>
                    <Link
                      href="/blog/[slug]"
                      as={`/blog/${slug.current}`}
                    >
                      <h2 className="text-stablesOrange">{title}</h2>
                      <span className="font-thin"></span>
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
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "blog"] | order(publishedAt desc)
    `)
  return {
    props: {
      posts,
    },
  }
}

export default Blog
