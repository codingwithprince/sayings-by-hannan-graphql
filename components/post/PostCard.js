import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { RichText } from '@graphcms/rich-text-react-renderer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Card, CardHeader, Avatar, IconButton, Typography, CardMedia, CardContent, CardActions, Box} from '@mui/material';
import style from '../../styles/Post.module.css'

const PostCard = ({post}) => {
  console.log(post)
  return (
    <Card sx={{ maxWidth:'100%' , margin: '20px'}}>
       <Box sx={{display: 'flex', margin:'10px'}}>
               <img style={{borderRadius:'50%'}} src={post.author.photo.url} height='70px' width='70px' />
               <Box style={{marginLeft: '10px', textAlign:'left'}}>
                 <Link key={post.title} href={`/post/${post.slug}`}>
                    <Typography variant='body1'>{post.author.name}</Typography>
                 </Link>
                  <Typography variant='body2'>{moment(post.createdAt).format('MMM DD YYYY')}</Typography>
               </Box>
             
             </Box>

       {/* <CardHeader
       
        avatar={
          <Avatar sx={{ backgroundColor:'orange' }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            
          </IconButton>
        }
        title={post.author.name}
        subheader={moment(post.createdAt).format('MMM DD YYYY')}
      /> */}
      <CardMedia
        component="img"
        height="194"
        image={post.featuredimage.url}
        alt="Paella dish"
        sx={{
          padding: '10px',
          minHeight: '300px'
        }}
      />
      <CardContent  >
        <Typography variant='h6' className={style.cardTitle}>{post.title}</Typography>
        <Typography variant='body2' className={style.richText}>
         <RichText  content={post.content.raw} />
        </Typography>
        
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard;