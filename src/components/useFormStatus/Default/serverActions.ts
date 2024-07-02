'use server';

import { sleep } from '@/utils/sleep';

export const submitForm = async () => {
  await sleep(2000);

  return 'ok';
};
