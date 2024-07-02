'use client';

import { useActionState, useState } from 'react';
import { FormBlock } from './FormBlock';
import { ResultBlock } from './ResultBlock';
import { Data } from './types';

type Props = {
  store: Data;
  saveData: (form: FormData) => Promise<void>;
};

export function FormUseState({ store, saveData }: Props) {
  const [optimisticResult, setOptimisticResult] = useState(store);

  const [
    ,
    formAction,
    isPending,
  ] = useActionState(async (__: string | null, formData: FormData) => {
    setOptimisticResult((prevState) => ({
      title: formData.get('title')?.toString() || prevState.title,
      description: formData.get('description')?.toString() || prevState.description,
    }));

    await saveData(formData);

    return 'ok';
  }, null);

  return (
    <form action={formAction}>
      <h2>Form With useState instead of useOptimistic</h2>

      <ResultBlock result={optimisticResult} />

      <hr />

      <FormBlock />

      <button type="submit" disabled={isPending}>Save!</button>
    </form>
  );
}
