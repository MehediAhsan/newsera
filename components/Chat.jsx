'use client'
import { useChat } from '@ai-sdk/react';
import React, { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { SiChatbot } from "react-icons/si";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <>
            {
                open && <div className='fixed bottom-5 right-5 z-50 h-1/2 w-3/12 overflow-y-auto bg-secondary'>
                    <div className='flex justify-between items-center px-3 py-1 border-b border-dark'>
                        <h1 className='text-dark'>Hello! You can chat with use</h1>
                        <FaMinus onClick={() => setOpen(!open)} className='text-primary cursor-pointer' size={26} />
                    </div>
                    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
                        {messages.map(message => (
                            <div key={message.id} className="whitespace-pre-wrap">
                                {message.role === 'user' ? 'User: ' : 'AI: '}
                                {message.parts.map((part, i) => {
                                    switch (part.type) {
                                        case 'text':
                                            return <div key={`${message.id}-${i}`}>{part.text}</div>;
                                    }
                                })}
                            </div>
                        ))}

                        <form onSubmit={handleSubmit}>
                            <input
                                className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
                                value={input}
                                placeholder="Say something..."
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                </div>
            }
            {
                !open && <SiChatbot onClick={() => setOpen(!open)} className='fixed bottom-5 right-5 bg-primary text-third p-1 rounded-full z-50 cursor-pointer' size={38} />
            }
        </>
    );
};

export default Chat;