import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import { PostCard, Categories, PostWidget } from '../components/post'
import { getPosts } from '../servies/index'

export default function Home({post}) {
  return (
   <div className={styles.container}>
      <Head>
         <title>Sayings By Hannan</title>
      </Head>
      <main>
         {post.map((data) => <PostCard post={data.node} key={data.title}/>)}
      </main>
      <PostWidget />
   </div> 


    )
}


export async function getStaticProps() {
   const post = ( await getPosts()) || [];
   return {
      props: { post }
   }
}