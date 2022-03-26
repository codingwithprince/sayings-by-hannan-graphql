import React from 'react'


import { getPosts, getPostDetails } from '../../servies';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components/post'
import { Container, Grid } from '@mui/material';
const PostDetails = ({ post }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item item xs={12} sm={10} md={9}>
          <PostDetail post={post} />
          <Author author={post.author} />
          <Comments slug={post.slug} />
          <CommentsForm slug={post.slug} />
        </Grid>
        <Grid item item sm={4} md={3} style={{textAlign:'center'}}>
          <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
          <Categories />
        </Grid>
      </Grid>
    </Container>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  }
}