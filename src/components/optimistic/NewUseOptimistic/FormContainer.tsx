'use client';

import { useState } from 'react';
import { sleep } from '@/utils/sleep';
import { FormUseOptimistic } from './Form';
import { Data } from './types';

export function FormContainerUseOptimistic() {
  const [store, setStore] = useState<Data>({ title: '', description: '' });

  const saveData = async (form: FormData) => {
    await sleep(2000);

    setStore((prevState) => ({
      title: form.get('title')?.toString() || prevState.title,
      description: form.get('description')?.toString() || prevState.description,
    }));
  };

  return (
    <FormUseOptimistic store={store} saveData={saveData} />
  );
}
