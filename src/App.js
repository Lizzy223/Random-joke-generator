import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('');
  const [display, SetDisplay] = useState(false);

  const getJoke =()=>{
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
      setJoke(response.data.setup + "..."  + response.data.punchline)
      console.log(response.status)
      SetDisplay(true)
    });
  };

  return (
    <ChakraProvider >
      <Box w='100%' h='100vh' justify='center' align='center' p='2rem' bg='navy' >
        <Text textAlign='center' fontSize='1.5rem' fontWeight='700' color='#fff' p='rem'>Random Joke Generator</Text>
        <Button onClick={getJoke} m='1rem'>Get Joke</Button>
        {
          display ? 
          <Box p='1rem' mt='1rem' bg='#fff' color='#000' minW='35%' h='35%' borderRadius='8px' >
            <Text color='#000'> {joke} </Text>
          </Box>
          :null
        }
        

      </Box>
    </ChakraProvider>
  );
}

export default App;
