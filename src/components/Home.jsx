import React from 'react';
import {Box, Container, Heading, Image, Stack,Text} from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
// import img5 from '../assets/5.jpg'
import img6 from '../assets/6.png'

const headingOptions = {
    pos:"absolute",
    left:'50%',
    top:'70%',
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    size:'4xl'
    

};
    
    


const Home = () => {

  return (
    <Box>
        <Mycarousel  />
        
        <Container minH={'100vh'} maxW={'container.xl'} p={'16'} >
            
            <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'} >Services</Heading>

            <Stack 
                h={'full'} 
                p={'4'} 
                alignItems={'center'} 
                direction={['column','row']
                }>
                    <Image src={img6} h={['40','300']} /*'filter={'hue-rotate(-130deg)'}'*/  />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign='center'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum fugit incidunt natus voluptate qui est porro et? Saepe commodi dolorum voluptates, recusandae velit dolorem repellendus! Quisquam nam laborum culpa ipsam? Sequi excepturi et iste animi in vero facere esse odio sint reprehenderit, illum praesentium, velit sunt, rerum delectus maiores debitis nostrum. Placeat labore natus officiis harum consectetur praesentium repellat amet quis, nulla nisi officia cum unde, quibusdam beatae saepe. Nam fuga laborum numquam dolorem. Quo voluptatibus maiores fugiat neque.
                    </Text>
             

            </Stack>
        </Container>

    </Box>
  )
};

const Mycarousel = () => (
    <Carousel  autoPlay infiniteLoop interval={2000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w={'full'} h={'70vh'} >
            <Image src={img1}  h={['30vh','100vh']}/>
            <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>
        
         <Box w={'full'} h={'70vh'} >
            <Image src={img2}  h={['30vh','100vh']}/>
            <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>Future Is Gamming</Heading>
        </Box>
        
        <Box w={'full'} h={'70vh'} >
            <Image src={img3}  h={['30vh','100vh']} />
            <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>Gamming On Console</Heading>
        </Box>
        
        {/* <Box w={'full'} h={'100vh'} >
            <Image src={img5} w={'100vh'} h={'100vh'}/>
            <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>Night Life</Heading>
        </Box> */}
        
        <Box w={'full'} h={'70vh'} >
            <Image src={img4}  h={['30vh','100vh']}/>
            <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>Night Life</Heading>
        </Box> 
        

    </Carousel>
)

export default Home