'use client'
import { useCompletion } from 'ai/react';
import { readStreamableValue } from 'ai/rsc';
import { useState } from 'react';
import { generate } from './actions';


export default function Robot() {
  const { completion, complete } = useCompletion({ api: '/api/chat' });

  const [input, setInput] = useState('');

  const [generation, setGeneration] = useState<string>('');

  return (
    <><div>
      <button
        onClick={async () => {
          const { output } = await generate('Why is the sky blue?');

          for await (const delta of readStreamableValue(output)) {
            setGeneration(currentGeneration => `${currentGeneration}${delta}`);
          }
        }}
      >
        Ask
      </button>

      <div>{generation}</div>
    </div>
      <br />


      <input className="text-blue-950" value={input} onChange={(e) => setInput(e.target.value)} />
      <div
        onClick={async () => {
          await complete(input);
        }}
      >Click to ask
      </div><div>{completion}</div>
    </>
  );
}
