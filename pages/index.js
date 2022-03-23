import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/Layout'


const post = [
   {title: "hello bro", data: 'lorem5', id: 1},
   {title: "hello sis", data: 'lorem10', id: 2}
]
export default function Home() {
  return (
   <div className={styles.container}>
      <Head>
         <title>Sayings By Hannan</title>
      </Head>
      <main>
         <h1>hELLO</h1>
         {post.map((data,index) => <p key={data.id}>{data.title}</p>)}
      </main>
      
   </div> 


    )
}
