import axios from 'axios';

const subscribeUser = async (email: string) => {
    // Your Mailchimp API key and audience ID should be set as environment variables
    const MAILCHIMP_API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
        throw new Error('Mailchimp API key or Audience ID is not defined.');
    }
    const MAILCHIMP_DC = MAILCHIMP_API_KEY.split('-')[1];

    const url = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
    const data = { email_address: email, status: 'subscribed' };
    const options = {
        headers: {
            Authorization: `apikey ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(url, data, options);
    return response.data;
};

export async function POST(req: Request) {
    const { email } = await req.json();

    if (!email) {
        return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
    }

    try {
        await subscribeUser(email);
        return new Response(JSON.stringify({ message: 'Successfully subscribed!' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
    }
}
