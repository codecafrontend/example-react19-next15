'use client';

import { useState } from 'react';
import { sleep } from '@/utils/sleep';
import { FormUseOptimisticWithError } from './Form';
import { Data } from './types';

export function FormContainerUseOptimisticWithError() {
  const [store] = useState<Data>({ title: '', description: '' });

  const saveData = async () => {
    await sleep(2000);

    throw new Error('Oh no!');
  };

  return (
    <FormUseOptimisticWithError store={store} saveData={saveData} />
  );
}
