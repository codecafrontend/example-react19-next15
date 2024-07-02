'use client';

import { useState } from 'react';
import { sleep } from '@/utils/sleep';
import { FormUseState } from './Form';
import { Data } from './types';

export function FormContainerUseState() {
  const [store, setStore] = useState<Data>({ title: '', description: '' });

  const saveData = async (form: FormData) => {
    await sleep(2000);

    setStore((prevState) => ({
      title: form.get('title')?.toString() || prevState.title,
      description: form.get('description')?.toString() || prevState.description,
    }));
  };

  return (
    <FormUseState store={store} saveData={saveData} />
  );
}
