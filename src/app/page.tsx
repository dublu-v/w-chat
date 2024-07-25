'use client'
import { useCompletion } from 'ai/react';
import { useState } from 'react';


export default function Robot() {
  const { completion, complete } = useCompletion({ api: '/api/chat' });

  const [input, setInput] = useState('');

  return (<>
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
