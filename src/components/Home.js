import { Box, Container, Heading, Image, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3 (1).jpg";
import img4 from "../assets/4 (1).jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  p:'4',
  size:'4xl',
}

const Home = () => {
  return <Box>
    <MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'}  p="16">
      <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
      <Stack
      h={'full'}
      p={'4'}
      alignItems={'center'}
      direction={['column','row']}
      >
      <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
      <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'justify'}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae et id velit voluptas ut incidunt temporibus quasi ducimus quos voluptatibus delectus repellendus quam est eligendi quisquam, magnam sit impedit commodi sequi dolore autem porro. Temporibus placeat culpa sapiente possimus ipsam qui tempore accusantium natus unde magnam ut eligendi, veritatis mollitia molestias, atque numquam ducimus, cumque nihil provident ullam laborum? Quam dolore eum maiores natus aliquid nobis. Ut, quam sequi reiciendis fugiat mollitia commodi voluptas architecto impedit nemo ullam, corporis autem corrupti quaerat similique maxime neque temporibus at, placeat assumenda? Ratione eveniet voluptatum deleniti debitis soluta aspernatur necessitatibus ea. Iure!
      </Text>
      </Stack>
    </Container>
  </Box>
};
const MyCarousel = () =>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w={'full'} h={'100vh'} >
    <Image src={img1} />
    <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch The Future</Heading>
    </Box>
    <Box w={'full'} h={'100vh'} >
    <Image src={img2} />
    <Heading bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions}>Future is Gaming</Heading>
    </Box>
    <Box w={'full'} h={'100vh'} >
    <Image src={img3} />
    <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>Gaming On Console</Heading>
    </Box>
    <Box w={'full'} h={'100vh'} >
    <Image src={img4} />
    <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>Night life is Cool</Heading>
    </Box>



    </Carousel>
)

export default Home;