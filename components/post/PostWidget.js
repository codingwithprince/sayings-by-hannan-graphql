import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../../servies'
import { Avatar, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'

const PostWidget = ({categories, slug}) => {
  const [relatedPost, setRelatedPost] = useState([]);
  useEffect(() => {
    if(slug){
      getSimilarPost(category, slug)
        .then((result) => setRelatedPost(result))
    } else{
      getRecentPosts()
        .then((result) => setRelatedPost(result))
    }
  },[slug])
  
  return (
    <Card style={{marginTop:'20px'}}>
      <Typography variant='h6' style={{textAlign: 'center', marginTop:'10px'}}>{slug? 'Related Post' : 'Recent Post'}</Typography>
      <CardContent>
         {relatedPost.map((post) => (
           <Box  key={post.title} style={{marginTop:'10px'}}>
             <Box sx={{display: 'flex'}}>
               <img style={{borderRadius:'50%'}} src={post.featuredimage.url} height='70px' width='70px' />
               <Box style={{marginLeft: '10px', textAlign:'left'}}>
                 <Link key={post.title} href={`/post/${post.slug}`}>
                    <Typography variant='body1'>{post.title}</Typography>
                 </Link>
                  <Typography variant='body2'>{moment(post.createdAt).format('MMM DD, YYYY')}</Typography>
               </Box>
             
             </Box>
              
           </Box>
         ))}
      </CardContent>
  
    </Card>

  )
}

export default PostWidget;