import axios from 'axios';

async function getText(sentences: string) {
  const response = await axios.get<string>('https://baconipsum.com/api/', {
    params: {
      type: 'all-meat',
      sentences,
      format: 'text'
    }
  });

  return response;
}

export default getText;
