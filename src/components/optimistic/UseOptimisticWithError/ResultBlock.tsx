'use client';

import { Data } from './types';

type Props = {
  result: Data;
  isPending: boolean;
};

export function ResultBlock({ result, isPending }: Props) {
  return (
    <div>
      <h3>New Data</h3>

      <div>
        <b>Title:</b>
        <span>{result.title}</span>
        {isPending && <i>(Saving...)</i>}
      </div>
      <div>
        <b>Description:</b>
        <span>{result.description}</span>
        {isPending && <i>(Saving...)</i>}
      </div>
    </div>
  );
}
