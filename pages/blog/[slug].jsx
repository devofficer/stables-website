import client from "../../client"
import { useRouter } from "next/router"
import Link from "next/link"
import groq from "groq"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"

const Blog = (props) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const { posts } = props
    return (
        <>
        <Head>
            <title>Blog</title>
        </Head>
        <Header />
        <main>
            <h1>Blog</h1>
            {posts.map((post) => (
            <div key={post._id}>
                <Link href={`/blog/${post.slug.current}`}>
                <a>
                    <h2>{post.title}</h2>
                </a>
                </Link>
                <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                width={post.mainImage.asset.metadata.dimensions.width}
                height={post.mainImage.asset.metadata.dimensions.height}
                />
            </div>
            ))}
        </main>
        <Footer />
        </>
    )
    }