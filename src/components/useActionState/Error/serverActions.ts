'use server';

import { sleep } from '@/utils/sleep';

export const submitForm = async () => {
  await sleep(1000);

  throw new Error('Oh no!');
};
