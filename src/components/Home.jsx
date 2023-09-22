import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/joanna-kosinska-LAaSoL0LrYs-unsplash.jpg';
import img2 from '../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import img3 from '../assets/alexander-grey-eMP4sYPJ9x0-unsplash.jpg';
import img4 from '../assets/retrosupply-jLwVAUtLOAQ-unsplash.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          LearnHub - Yours Personalized Learning Assistant.
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            LearnHub, an innovative web platform, connects Indian Students with the best teachers nationwide. It offers personalized learning experiences, helping students search for courses, assess their skills, and access live classes. The platform recommends courses based on user preferences, track progress, and fosters a collaborative learning envirnoment. LearnHub aims to revolutionize education by making quality teaching accessible and tailored to individual needs, empowering students accross India to achieve their educational goals.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    onSwipeMove={true}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading
        fontSize={['4xl', '7xl']}
        bgColor={'blackAlpha.600'}
        color={'white'}
        {...headingOptions}
      >
        LearnHub - Your personalized learning assistant. 
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading
        fontSize={['4xl', '7xl']}
        bgColor={'whiteAlpha.900'}
        color={'black'}
        {...headingOptions}
      >
        Connecting students with the best teachers, one click at a time.
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading
        fontSize={['4xl', '7xl']}
        bgColor={'whiteAlpha.600'}
        color={'black'}
        {...headingOptions}
      >
        Where great teachers meet eager learners.
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading
        fontSize={['4xl', '7xl']}
        bgColor={'whiteAlpha.600'}
        color={'black'}
        {...headingOptions}
      >
        Bringing quality education to your fingertips.
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
