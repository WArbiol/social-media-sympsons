import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  let posts = [
    {
      avatar:
        'https://cdn-0.easydrawingtutorials.com/images/HomerSimpson/homer-simpson-step-last.jpg?ezimgfmt=ng:webp/ngcb2',
      title: 'Everybody together S2',
      date: 'March 14, 2022',
      src: 'https://i.pinimg.com/originals/b7/26/0e/b7260e36be4b3243cc86735f1f5659ab.png',
      description:
        'This impressive meeting is a perfect party and a fun time to play together with your friends. All started with one cup of beer that Moes gave us for free, along mussels, if you like.',
    },
    {
      avatar: 'https://pngimg.com/uploads/simpsons/small/simpsons_PNG90.png',
      title: 'Driving a bit',
      date: 'February 23, 2022',
      src: 'https://recreio.uol.com.br/amp-stories/5-fatos-sobre-os-simpsons/assets/11.jpeg',
      description: 'A regular photo of a regular day in my car.',
    },
    {
      avatar: 'https://pngimg.com/uploads/simpsons/small/simpsons_PNG91.png',
      title: 'A fun with  my Umbreala',
      date: 'February 03, 2022',
      src: 'https://runwaymagazines.com/wp-content/uploads/2021/10/Marge-Simpson-Iconic-Dresses-AleXsandro-Palombo-Richard-Avedons-famous-1957-photograph-of-Carmen-dellOrefice-1536x1536.jpg',
      description:
        "This impressive image is the  recrition of the Richard Avedon's famous 1957 photograph of Carmen dell'Orefice, did you like it?",
    },
    {
      avatar: 'https://pngimg.com/uploads/simpsons/small/simpsons_PNG96.png',
      title: 'TONY HALK BABE!',
      date: 'January 21, 2022',
      src: 'https://thumbs.gfycat.com/InfantileVapidAmazonparrot-size_restricted.gif',
      description: 'What a f**, it was Tony Halk with be babe!',
    },
  ]
  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Post
          avatar={post.avatar}
          title={post.title}
          date={post.date}
          src={post.src}
          description={post.description}
        />
      ))}
    </Box>
  )
}

export default Feed
