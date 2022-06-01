import { createClient } from 'redis';

const client = createClient({
    url: 'redis://redis:6379'
  });

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

export const set_value = async (key, value) => {
  await client.set(key, value);
}

export const get_value = async (key) => {
  const value = await client.get(key);
  return value;
}

