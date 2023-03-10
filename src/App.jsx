import { useEffect, useState } from 'react';
import { arrayItems } from './AiOptions';
import Home from './Components/Home';
import Input from './Components/Input';
import axios from 'axios';

function App() {
  const [option, setOption] = useState(null);
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const api_key = import.meta.env.VITE_Open_AI_Key;
  const apiRequestBody = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: option + input }, // The messages from our chat with ChatGPT
    ],
  };

  const fetchHandler = async () => {
    setIsLoading(true);
    setResult('');
    try {
      const data = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        apiRequestBody,
        {
          headers: {
            Authorization: 'Bearer ' + api_key,
            'Content-Type': 'application/json',
          },
        }
      );
      setResult(data.data.choices[0].message.content);
      setInput('');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {option === null ? (
        <Home arrayItems={arrayItems} selectOption={setOption} />
      ) : (
        <Input
          output={fetchHandler}
          option={option}
          setInput={setInput}
          result={result}
          setoption={setOption}
          loading={isLoading}
          input={input}
          setresult={setResult}
        />
      )}
    </>
  );
}

export default App;
