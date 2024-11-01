// contentfulClient.js
import { createClient } from 'contentful';

// Access credentials from environment variables
const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default client;
