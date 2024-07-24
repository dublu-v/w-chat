'use client';

import { useChat } from "ai/react";


export default function Robot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: "api/chat" });

  return (
    <div className="flex flex-col w-full mx-2 stretch">
      {messages.map((message) => (
        <div className="whitespace-pre-wrap" key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))
      }
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded text-blue-950"
          type="text"
          value={input}
          placeholder="Says something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
