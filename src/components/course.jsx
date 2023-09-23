import React from 'react';
import { useState } from 'react';
import {
  Input,
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Button,
  Image,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { CgDetailsMore } from 'react-icons/cg';

// import dataObject from './Data';
const dataObject = [
  {
    'teacher': 'Hitesh Choudhary',
    youtube: 'CodeWithHarry',
    experience: '5 years',
    language: 'Hindi',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.8', '7.5'],
  },
  {
    'teacher': 'Shaun Pelling',
    youtube: 'The Net Ninja',
    experience: '6 years',
    language: 'English',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.8', '7.3'],
  },
  {
    'teacher': 'Ramesh Singh',
    youtube: 'Striver',
    experience: '7 years',
    language: 'Hindi',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.8', '8.9'],
  },
  {
    'teacher': 'Tim Devid',
    youtube: 'FreeCodeCamp',
    experience: '4 years',
    language: 'English',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
  {
    'teacher': 'Chris Ching',
    youtube: 'CodeWithChris',
    experience: '3 years',
    language: 'English',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
  {
    'teacher': 'John Purcell',
    youtube: 'Cave of Programming',
    experience: '5.5 years',
    language: 'English',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
  {
    'teacher': 'Mosh Hamedani',
    youtube: 'Programming with Mosh',
    experience: '5 years',
    language: 'English',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
  {
    'teacher': "Navin Reddy's",
    youtube: 'Telusko',
    experience: '4 years',
    language: 'English',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
  {
    'teacher': 'Derek Banas',
    youtube: 'Derek Banas',
    experience: '4.5 years',
    language: 'English',
    courses: ['Web Development', 'C++', 'Java', 'Python'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
  {
    'teacher': 'Koushik Kothagal',
    youtube: 'Java Brains',
    experience: '5 years',
    language: 'English',
    courses: ['Python'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
  {
    'teacher': 'Derek Banas',
    youtube: 'Derek Banas',
    experience: '4.5 years',
    language: 'English',
    courses: ['Java'],
    rating: ['8.6', '9.8', '7.4', '8.3'],
  },
  {
    'teacher': 'Brad Traversy',
    youtube: 'Traversy Media',
    experience: '7 years',
    language: 'English',
    courses: ['C++'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
  {
    'teacher': 'Bajarne Stroustrup',
    youtube: 'Derek Banas',
    experience: '4.5 years',
    language: 'English',
    courses: ['Web Development'],
    rating: ['8.6', '8.1', '7.4', '8.3'],
  },
];
console.log(dataObject); // Now, 'dataObject' contains your JSON data as a JavaScript object


// Example usage:
// Replace with the course you want to search
// const bestTeacher = findBestTeacher(courseName);

// if (typeof bestTeacher === 'string') {
//   console.log(bestTeacher); // No teacher offers this course.
// } else {
//   console.log(`The best teacher for ${courseName} is ${bestTeacher.teacher}`);
//   console.log(`YouTube Channel: ${bestTeacher.youtube}`);
//   console.log(`Rating: ${bestTeacher.rating[0]}`);
// }

function Course() {
    const [bestTeacher, setbestTeacher] = useState(null)
    const [bestTeacher1, setbestTeacher1] = useState(null)
    const [bestTeacher2, setbestTeacher2] = useState(null)
    const [bestTeacher3, setbestTeacher3] = useState(null)
function findBestTeacher(course) {
    // Step 2: Filter teachers who offer the specific course
    const filteredTeachers = dataObject.filter((teacher) =>
    teacher.courses.includes(course)
    );

  if (filteredTeachers.length === 0) {
    return 'No teacher offers this course.';
  }

  // Step 3: Find the teacher with the highest rating
  const bestteacher = filteredTeachers.reduce((prev, current) => {
    const prevRating = parseFloat(prev.rating[0]); // Assuming the first rating is the highest
    const currentRating = parseFloat(current.rating[0]);
    return prevRating > currentRating ? prev : current;
  });
  console.log(bestteacher)

  if(course==='Web Development') {

    setbestTeacher(bestteacher)
  }
  if(course==='C++') {

    setbestTeacher1(bestteacher)
  }
  if(course==='Java') {

    setbestTeacher2(bestteacher)
  }
  if(course==='Python') {

    setbestTeacher3(bestteacher)
  }
  return bestteacher;
}
  return (
    <Box>
      <Stack direction={['column', 'row']} h={'100vh'}>
        <VStack px={'20px'} alignItems={'flex-start'} pt={'54px'}>
          <HStack w={'full'} py={'2'}>
            <Heading
              borderBottom={'2px solid '}
              justify={'flex-start'}
              textAlign={'left'}
            >
              Courses
            </Heading>
            <HStack borderBottom={'2px solid '} marginLeft={'auto'}>
              <Input
                //   pl={'1000'}
                marginLeft="auto" // Push the input to the right
                w={'300px'} // Set the width of the input
                placeholder="Search Courses"
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
              />
              <Button variant={'ghost'} borderRadius={'10 10px 10px 10'}>
                <BsSearch />
              </Button>
            </HStack>
          </HStack>
          <HStack alignItems={'flex-start'}>
            <Text fontSize={'1xl'}>
              LearnHub provides is an innovative online platform designed to
              revolutionize the way students discover and connect with
              exceptional teachers across India. With a mission to empower
              students with personalized learning experiences, LearnHub serves
              as a comprehensive educational marketplace.
            </Text>
          </HStack>
          <HStack
            py={'4'}
            w={'full'}
            justifyContent={'space-around'}
            alignItems={'center'}
          >
            <Card w={'300px'} h={'400px'} >
              {bestTeacher?
              <CardBody>
                <Button onClick={()=>setbestTeacher(null)}>Close</Button>
                <Text py={'2'} fontSize={'2xl'}>
                  {bestTeacher['teacher']}
                </Text>
                <Text py={'2'}>
                  Experience: {bestTeacher['experience']}
                </Text>
                <Text py={'2'}>
                  Youtube: {bestTeacher['youtube']}
                </Text>
                <Text py={'2'}>
                  Language: {bestTeacher['language']}
                </Text>
              </CardBody>
              :<CardBody>
                <Image src="https://www.netsolutions.com/insights/wp-content/uploads/2022/11/what-is-php-for-web-development-and-why-should-you-use-It.png.webp"></Image>
                <Text py={'2'} fontSize={'2xl'}>
                  Web Development
                </Text>
                <Text py={'2'}>
                  Web DevelopmentMasterclass: Build Your Dream Websites.
                </Text>
                <Button
                  py={'4'}
                  alignContent={'flex-end'}
                  onClick={e => findBestTeacher('Web Development')}
                >
                  <CgDetailsMore />
                </Button>
              </CardBody>}
            </Card>
            <Card w={'300px'} h={'400px'}>
           { bestTeacher1?<CardBody>
            <Button onClick={()=>setbestTeacher1(null)}>Close</Button>
                <Text py={'2'} fontSize={'2xl'}>
                  {bestTeacher1['teacher']}
                </Text>
                <Text py={'2'}>
                  Experience: {bestTeacher1['experience']}
                </Text>
                <Text py={'2'}>
                  Youtube: {bestTeacher1['youtube']}
                </Text>
                <Text py={'2'}>
                  Language: {bestTeacher1['language']}
                </Text>
              </CardBody>: <CardBody>
                <Image src="https://engineering.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg"></Image>
                <Text py={'2'} fontSize={'2xl'}>
                  C/C++
                </Text>
                <Text py={'2'}>
                  Unlocking the Power of C++: From Basics to Advanced.
                </Text>
                <Button py={'4'} alignContent={'flex-end'} onClick={e => findBestTeacher('C++')}>
                  <CgDetailsMore />
                </Button>
                </CardBody>}
            </Card>
            <Card w={'300px'} h={'400px'}>
            {bestTeacher2?<CardBody>
              <Button onClick={()=>setbestTeacher2(null)}>Close</Button>
                <Text py={'2'} fontSize={'2xl'}>
                  {bestTeacher2['teacher']}
                </Text>
                <Text py={'2'}>
                  Experience: {bestTeacher2['experience']}
                </Text>
                <Text py={'2'}>
                  Youtube: {bestTeacher2['youtube']}
                </Text>
                <Text py={'2'}>
                  Language: {bestTeacher2['language']}
                </Text>
              </CardBody>:<CardBody>
                <Image
                  src="https://www.technotification.com/wp-content/uploads/2016/07/Why-is-Java-the-best-programming-Language.png"
                  maxH={'60'}
                ></Image>
                <Text py={'2'} fontSize={'2xl'}>
                  Java
                </Text>
                <Text py={'2'}>
                  Java Mastery: The Complete Programming Course.
                </Text>
                <Button py={'4'} alignContent={'flex-end'}onClick={e => findBestTeacher('Java')}>
                  <CgDetailsMore />
                </Button>
              </CardBody>}
            </Card>
            <Card w={'300px'} h={'400px'}>
            {bestTeacher3?<CardBody>
              <Button onClick={()=>setbestTeacher3(null)}>Close</Button>
                <Text py={'2'} fontSize={'2xl'}>
                  {bestTeacher3['teacher']}
                </Text>
                <Text py={'2'}>
                  Experience: {bestTeacher3['experience']}
                </Text>
                <Text py={'2'}>
                  Youtube: {bestTeacher3['youtube']}
                </Text>
                <Text py={'2'}>
                  Language: {bestTeacher3['language']}
                </Text>
              </CardBody>:<CardBody>
                <Image src="https://contentstatic.techgig.com/photo/84017907.cms"></Image>
                <Text py={'2'} fontSize={'2xl'}>
                  Python
                </Text>
                <Text py={'2'}>
                  Python for Beginners: Unlocking the World of Programming.
                </Text>
                <Button py={'4'} alignContent={'flex-end'}onClick={e => findBestTeacher('Python')}>
                  <CgDetailsMore />
                </Button>
              </CardBody>}
            </Card>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Course;
