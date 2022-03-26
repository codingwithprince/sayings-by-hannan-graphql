import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { RichText } from '@graphcms/rich-text-react-renderer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Card, CardHeader, Avatar, IconButton, Typography, CardMedia, CardContent, CardActions, Box, Button, Grid} from '@mui/material';
import style from '../../styles/Post.module.css'

const PostCard = ({post}) => {
  return (
    <Card sx={{ maxWidth:'100%' , margin: '20px'}}>
       <Box sx={{display: 'flex', margin:'10px'}}>
               <img style={{borderRadius:'50%'}} src={post.author.photo.url} height='50px' width='50px' />
               <Box style={{marginLeft: '10px', textAlign:'left'}}>
                 <Link key={post.title} href={`/post/${post.slug}`}>
                    <Typography variant='body1' sx={{fontWeight:'600', color: '#555'}}>{post.author.name}</Typography>
                 </Link>
                  <Typography variant='body2' sx={{ color: '#777', marginTop:'5px'}}>{moment(post.createdAt).format('MMM DD YYYY')}</Typography>
               </Box>
             </Box>

      <CardMedia
        component="img"
        height="120px"
        image={post.featuredimage.url}
        alt="Paella dish"
        sx={{
          padding: '10px',
          minHeight: '200px'
        }}
      />
      <CardContent  style={{height: '150px', overflow:'hidden'}}>
        <Typography variant='h6' className={style.cardTitle}>{post.title}</Typography>
        <Typography variant='body2' className={style.richText} >
         <RichText  content={post.content.raw} />
        </Typography>
        
      </CardContent>

      <CardActions disableSpacing sx={{marginTop:'10px'}}>
              <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
              </IconButton>
              <Link href={`post/${post.slug}`}>
              <Button size='small' variant='contained' sx={{backgroundColor:'#ff1493', marginLeft:'auto'}}>Read more</Button>
              </Link>
             
      </CardActions>
    </Card>
  )
}

export default PostCard;