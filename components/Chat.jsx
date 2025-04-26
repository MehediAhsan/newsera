'use client'
import { useChat } from '@ai-sdk/react';
import React, { useState, useEffect, useRef } from 'react';
import { FaMinus } from 'react-icons/fa';
import { SiChatbot } from "react-icons/si";
import { IoIosSend } from 'react-icons/io';

const Chat = () => {
    const [open, setOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <>
            {open && (
                <div className="fixed bottom-6 right-6 z-50 w-80 max-w-lg h-96 bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden transition-transform transform duration-300">
                    <div className="flex justify-between items-center px-4 py-2 bg-primary text-white">
                        <h1 className="text-lg font-semibold">Chat with Us</h1>
                        <FaMinus
                            onClick={() => setOpen(false)}
                            className="cursor-pointer text-white hover:text-gray-300"
                            size={20}
                        />
                    </div>

                    <div className={`h-72 px-4 py-2 space-y-4 ${messages?.length === 0 ? 'flex justify-center items-center' : 'overflow-y-auto'}`}>
                        {
                            messages?.length === 0 && <p className='text-fourth dark:text-third'>How Can I help You?</p>
                        }
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}
                            >
                                <div className={`max-w-64 p-3 overflow-y-hidden rounded-lg text-sm ${message.role === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
                                    {message.parts.map((part, i) => {
                                        if (part.type === 'text') {
                                            return <p key={`${message.id}-${i}`}>{part.text}</p>;
                                        }
                                    })}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                        className="flex items-center px-4 py-2 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="w-full p-2 rounded-md border border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:text-secondary"
                        />
                        <button type="submit" className="ml-2 text-primary hover:text-primary-dark">
                            <IoIosSend size={24} />
                        </button>
                    </form>
                </div>
            )}

            {!open && (
                <SiChatbot
                    onClick={() => setOpen(true)}
                    className="fixed bottom-5 right-5 z-50 bg-primary text-white p-2 rounded-full cursor-pointer shadow-lg transition-all hover:scale-105"
                    size={50}
                />
            )}
        </>
    );
};

export default Chat;
