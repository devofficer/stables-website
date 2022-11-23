import client from "../../client"
import { useRouter } from "next/router"
import Link from "next/link"
import groq from "groq"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"

const Blog = ({ post }) => {
  const {
    title = "Missing",
    slug = "sd",
    mainImage = "",
    body = "",
    categories = "",
    publishedAt = "",
    author = "",
  } = post
  return (
    <div>
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <article>
          <h2>{post.title}</h2>
          {post.slug}
          <div>
            
          </div>
          <div><p>{post.body}</p></div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "posts" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] 
  `,
    { slug }
  )
  return {
    props: {
      post,
    },
  }
}

export default Blog
