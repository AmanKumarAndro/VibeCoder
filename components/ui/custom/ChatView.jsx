"use client"
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import Colors from '@/data/Colors';
import Lookup from '@/data/Lookup';
import { useConvex } from 'convex/react';
import { ArrowRight, Link } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const ChatView = () => {
    const { id } = useParams();
    const convex = useConvex();
    const { messages, setMessages } = useContext(MessagesContext);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const [userInput, setUserInput] = useState('');
    useEffect(() => {
        if (id) GetWorkspaceData();
    }, [id]);

    const GetWorkspaceData = async () => {
        const result = await convex.query(api.workspace.GetWorkspace, { workspacesId: id });
        console.log("result", result);
        setMessages(Array.isArray(result?.messages) ? result.messages : []);
    };

    return (
        <div className='relative h-85vh flex flex-col '>
            <div className='flex-1 overflow-y-scroll'>
            {Array.isArray(messages) && messages.length > 0 ? (
                messages?.map((msg, index) => (
                    <div key={index}
                    className='p-3 rounded-lg mb-2 flex items-start'    style={{
                        backgroundColor: Colors.CHAT_BACKGROUND,
                        }}>
                        {msg?.role === 'user' && <Image className='cursor-pointer rounded-full object-cover' src={userDetail?.picture} width={35} height={35} alt="UserImage" />}
                        <h2 className='text-white'>{msg?.content}</h2>
                    </div>
                ))
            ) : (
                <p>No messages found</p> 
            )}
            </div>

            {/*Input Section*/}
            <div style={{ backgroundColor: Colors.BACKGROUND }} className="p-5 border border-gray-500 w-full mt-3 max-w-xl rounded-xl">
                <div className='flex  gap-2'>
                    <textarea onChange={(e) => setUserInput(e.target.value)}
                        className='outline-none w-full bg-transparent h-32 max-h-56 resize-none' placeholder={Lookup.INPUT_PLACEHOLDER}
                    />
                    {userInput && <ArrowRight onClick={() => onGenerate(userInput)} className='bg-blue-500  p-2 h-10 w-10' />}
                </div>
                <Link className='w-5 h-5' />
            </div>
        </div>
    );
};

export default ChatView;
