  // contentfulClient.js
  import { createClient } from 'contentful';

  // Access credentials from environment variables

  console.log('Space ID:', process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
  console.log('Access Token:', process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);
  
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  export default client;
