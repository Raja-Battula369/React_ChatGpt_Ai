import {
  Button,
  Heading,
  Highlight,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Input = ({
  output,
  setInput,
  result,
  option,
  setoption,
  loading,
  input,
  setresult,
}) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currIndex = 0;
    const typeNextLetter = async () => {
      if (currIndex < result.length - 1) {
        await setTypedText((prevTypedTxt) => prevTypedTxt + result[currIndex]);
        currIndex++;
        await setTimeout(typeNextLetter, 50);
      }
    };
    typeNextLetter();
    return () => {
      clearTimeout();
      setTypedText('');
    };
  }, [result]);

  return (
    <VStack bgColor="#686968" minH="100vh" p="1rem">
      <Heading
        textDecor={'underline'}
        mb={'2rem'}
        textAlign={'center'}
        onClick={() => {
          setoption(null);
          setresult('');
        }}
        sx={{ '&:hover': { cursor: 'pointer' } }}
      >
        <Highlight
          query="Ai"
          styles={{ px: '2', py: '0.5', rounded: 'full', bg: 'red.100' }}
        >
          React Ai
        </Highlight>{' '}
      </Heading>
      <Text as={'b'} textDecor="underline" color={'white'}>
        {option}
      </Text>
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        color={'black'}
        focusBorderColor="none"
        maxW={'20rem'}
        placeholder="Type here..."
        sx={{ backgroundColor: 'white' }}
      />
      <Button isLoading={loading} onClick={output}>
        Enter
      </Button>

      <Text color={'white'} fontSize={['lg']} as={'b'} maxW="90%">
        {result.length > 0 ? typedText : ''}
      </Text>
    </VStack>
  );
};

export default Input;
