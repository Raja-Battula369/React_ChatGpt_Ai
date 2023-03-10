import {
  Box,
  Container,
  Heading,
  Highlight,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import '../App.css';
const Home = ({ arrayItems, selectOption }) => {
  return (
    <Container className="body" p="1rem" maxW={'full'} bgColor="#686968">
      <Heading textDecor={'underline'} mb={'2rem'} textAlign={'center'}>
        <Highlight
          query="Ai"
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
        >
          React Ai
        </Highlight>{' '}
      </Heading>
      <VStack maxW={'full'}>
        <HStack justifyContent={'center'} w={'full'} wrap={'wrap'} gap="2rem">
          {arrayItems.map((arr, i) => (
            <HStack
              key={arr.id + i}
              shadow={'md'}
              p="1rem"
              w={'30rem'}
              onClick={() => selectOption(arr.message)}
              sx={{ '&:hover': { cursor: 'pointer', opacity: '0.8' } }}
              bgColor="white"
            >
              <VStack
                justifyContent={'center'}
                minW={['2rem', '3rem', '4rem']}
                h={['2rem', '3rem', '4rem']}
                bgColor={arr.iconColor}
              >
                <Icon boxSize={['0.5rem', '1rem', '1.5rem']} as={arr.icon} />
              </VStack>
              <Box>
                <Heading fontSize={['sm', 'md', 'lg']}>{arr.name}</Heading>
                <Text maxW={'full'}>{arr.description}</Text>
              </Box>
            </HStack>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Home;
