import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '../../servies';
import { Card, List, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
   getCategories()
        .then((newCategories) => setCategories(newCategories))  
  }, [])
  
  return (
    <Card style={{marginTop:'20px'}}>
         <Typography variant='h6' style={{textAlign: 'center', marginTop:'10px'}}>Categories</Typography>
         <Box style={{marginTop:'0', textAlign:'left', padding:'15px'}}>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <Typography variant="body2" sx={{fontWeight:'500', textTransform:'uppercase',cursor:'pointer', padding:'10px 0'}}>{category.name}</Typography>
              </Link>
            ))}
          </Box>
    </Card>
  )
}

export default Categories