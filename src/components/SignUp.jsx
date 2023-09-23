import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post('http://localhost:8000/signup', { name, email, password })
        .then(res => {
          if ((res.data === 'exist')) {
            alert('User already exist');
            // history('/home', { state: { id: email } });
          } else if ((res.data === 'notexist')) {
             history('/', { state: { id: email } });
          }
        })
        .catch(e => {
          alert('wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Container maxW={'container.xl'} h={'auto'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="purple.500"
            onChange={e => {
              setName(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="purple.500"
            onChange={e => {
              setEmail(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple.500"
            onChange={e => {
              setPassword(e.target.value);
            }}
          ></Input>
          <Button colorScheme="purple" type="submit" onClick={submit}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Sign?{' '}
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default SignUp;
