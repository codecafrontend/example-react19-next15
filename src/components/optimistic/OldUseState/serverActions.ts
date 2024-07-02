'use server';

import { sleep } from '@/utils/sleep';
import { Data } from './types';

export const submitForm = async (prevState: Data, form: FormData): Promise<Data> => {
  await sleep(2000);

  return {
    title: form.get('title')?.toString() || prevState.title,
    description: form.get('description')?.toString() || prevState.description,
  };
};
