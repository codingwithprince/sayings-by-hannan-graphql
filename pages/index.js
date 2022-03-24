import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import { PostCard, Categories, PostWidget } from '../components/post'
import { getPosts } from '../servies/index'
import { Container, Grid } from '@mui/material'

export default function Home({post}) {
  return (
   <Container fixed>
      <Head>
         <title>Sayings By Hannan</title>
      </Head>
      <Grid container spacing={2}>
         <Grid item xs={12} sm={10} md={9}> 
             {post.map((data) => <PostCard post={data.node} key={data.node.title}/>)}
         </Grid>
         <Grid item sm={4} md={3} style={{textAlign:'center'}}>
             <PostWidget />
         </Grid>
      </Grid>
     
     
   </Container> 


    )
}


export async function getStaticProps() {
   const post = ( await getPosts()) || [];
   return {
      props: { post }
   }
}