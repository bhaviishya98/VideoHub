import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  // const [name, setName] = useState('');

  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post('http://localhost:8000/', { email, password })
        .then(res => {
          if ((res.data === 'exist')) {
            history('/', { state: { id: email } });
          } else if ((res.data === 'notexist')) {
            alert('User have not sign up');
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
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
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
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button colorScheme="purple" type="submit" onClick={submit}>
            Login in
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
