'use client';

import { useActionState } from 'react';
import { submitForm } from './serverActions';

export function FormUseActionState() {
  const [result, formAction] = useActionState(submitForm, null);

  console.log('Client Component Render. Data:', result);

  return (
    <form action={formAction}>
      <h2>Form With useActionState</h2>
      <input name="title" />

      <button type="submit">Save!</button>
    </form>
  );
}
