/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export'
}

module.exports = {
    images: {
      unoptimized: true,
    },
<<<<<<< HEAD
=======
    env: {
      NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      NEXT_PUBLIC_MAILCHIMP_API_KEY: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY, 
      NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID: process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
      
  },
>>>>>>> 56e2ad2 (testing)
    
  };
  
// module.exports = nextConfig
