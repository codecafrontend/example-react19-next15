'use client';

import { useActionState, useOptimistic } from 'react';
import { FormBlock } from './FormBlock';
import { ResultBlock } from './ResultBlock';
import { Data } from './types';

type Props = {
  store: Data;
  saveData: (form: FormData) => Promise<void>;
};

export function FormUseOptimistic({ store, saveData }: Props) {
  const [optimisticResult, setOptimisticResult] = useOptimistic(store);

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
      <h2>Form With useOptimistic</h2>

      <ResultBlock result={optimisticResult} isPending={isPending} />

      <hr />

      <FormBlock />

      <button type="submit" disabled={isPending}>Save!</button>
    </form>
  );
}
