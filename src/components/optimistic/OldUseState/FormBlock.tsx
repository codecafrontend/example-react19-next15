'use client';

import { useFormStatus } from 'react-dom';

export function FormBlock() {
  const { pending } = useFormStatus();

  return (
    <div>
      <h3>Form Block</h3>

      <input name="title" placeholder="title" disabled={pending} />
      <input name="description" placeholder="description" disabled={pending} />
    </div>
  );
}
