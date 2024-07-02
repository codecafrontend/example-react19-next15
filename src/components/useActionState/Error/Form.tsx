'use client';

import { useActionState } from 'react';
import { submitForm } from './serverActions';

export function FormErrorUseActionState() {
  const [, formAction, isPending] = useActionState(submitForm, null);

  return (
    <form action={formAction}>
      <h2>Form With useActionState and Error</h2>

      {!isPending
        && (
        <>
          <input name="title" />
          <button type="submit">Save!</button>
        </>
        )}

      {isPending && <span>Loading...</span>}
    </form>
  );
}
