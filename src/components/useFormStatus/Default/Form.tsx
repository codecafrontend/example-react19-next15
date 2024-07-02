'use client';

import { useActionState } from 'react';
import { submitForm } from './serverActions';
import { FormBlock } from './FormBlock';

export function FormUseFormStatus() {
  const [, formAction, isPending] = useActionState(submitForm, null);

  return (
    <form action={formAction}>
      <h2>Form with useFormStatus</h2>

      <FormBlock />

      <button type="submit" disabled={isPending}>Save!</button>
    </form>
  );
}
