'use client';

import { Data } from './types';

type Props = {
  result: Data;
};

export function ResultBlock({ result }: Props) {
  return (
    <div>
      <h3>New Data</h3>

      <div>
        <b>Title:</b>
        <span>{result.title}</span>
      </div>
      <div>
        <b>Description:</b>
        <span>{result.description}</span>
      </div>
    </div>
  );
}
