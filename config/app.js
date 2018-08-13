import dotenv from 'dotenv';
import ngrok from 'ngrok';

dotenv.config();

export default async function () {
  const apiKey = process.env.SHOPIFY_API_KEY || 'shopify_app_api_key';
  const secret = process.env.SHOPIFY_SECRET || 'shopify_app_secret';
  const scopes = ['read_customers', 'write_customers'];

  let ngrokUrl;
  if (process.env.NODE_ENV == 'development') {
    ngrokUrl = await ngrok.connect(8081);
    console.log(ngrokUrl);
  }
  const hostName = process.env.HOST_NAME || ngrokUrl.replace('https://', '');

  return {
    apiKey,
    secret,
    scopes,
    hostName,
  };
}
