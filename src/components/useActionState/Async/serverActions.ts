'use server';

import { sleep } from '@/utils/sleep';

export const submitForm = async (prevState: string | null, form: FormData) => {
  console.log('[Async] Server action. Data:', form.get('title'));

  await sleep(1000);

  return 'ok';
};
