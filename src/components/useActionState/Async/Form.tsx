'use client';

import { useActionState } from 'react';
import { submitForm } from './serverActions';

export function FormAsyncUseActionState() {
  const [result, formAction, isPending] = useActionState(submitForm, null);

  console.log('[Async] Client Component Render. Data:', result);

  return (
    <form action={formAction}>
      <h2>Async Form with useActionState</h2>

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
