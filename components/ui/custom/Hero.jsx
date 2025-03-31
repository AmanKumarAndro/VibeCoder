"use client"
import Lookup from '@/data/Lookup'
import React, { useContext, useState } from 'react'
import { ArrowRight, Link } from 'lucide-react'
import Colors from '@/data/Colors'
import { MessagesContext } from '@/context/MessagesContext'
import { UserDetailContext } from '@/context/UserDetailContext'
import SigninDialog from './SigninDialog'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import { api } from '@/convex/_generated/api'

function Hero() {
    const [userInput, setUserInput] = useState('');
    const { messages, setMessages } = useContext(MessagesContext)
    const { userDetail, setUserDetail } = useContext(UserDetailContext)
    const [openDialog, setOpenDialog] = useState(false);
    const CreateWorkspace = useMutation(api.workspace.CreateWorkspace)
    const router = useRouter();
    const onGenerate = async (input) => {
        console.log(userDetail)
        console.log(input)
        if (!userDetail?.name) {
            setOpenDialog(true);
            return;
        }
        const msg = {
            role: 'user',
            content: input
        }

        setMessages({
            role: 'user',
            content: input
        })
        const workspacesId = await CreateWorkspace({
             user: userDetail._id,messages: [msg]
        })
        console.log(workspacesId);
        router.push(`/workspace/${workspacesId}`)
    }
    return (
        <div className='flex flex-col mt-36 gap-2 xl:mt-52 items-center'>
            <h2 className='text-4xl font-bold text-center'>
                {Lookup.HERO_HEADING}
            </h2>
            <p className='text-gray-400 font-medium text-center'>
                {Lookup.HERO_DESC}
            </p>
            <div style={{ backgroundColor: Colors.BACKGROUND }} className="p-5 border border-gray-500 w-full mt-3 max-w-xl rounded-xl">
                <div className='flex  gap-2'>
                    <textarea onChange={(e) => setUserInput(e.target.value)}
                        className='outline-none w-full bg-transparent h-32 max-h-56 resize-none' placeholder={Lookup.INPUT_PLACEHOLDER}
                    />
                    {userInput && <ArrowRight onClick={() => onGenerate(userInput)} className='bg-blue-500  p-2 h-10 w-10' />}
                </div>
                <Link className='w-5 h-5' />
            </div>
            <div className="flex mt-4 flex-wrap gap-3 max-w-2xl items-center justify-center">
                {Lookup?.SUGGSTIONS?.map((item, index) => (
                    <h2 onClick={() => onGenerate(item)} key={index} className='p-1 px-2 border  rounded-full text-sm text-gray-400 hover:text-gray-200 hover:cursor-pointer h'>
                        {item}
                    </h2>
                ))}
            </div>
            <SigninDialog openDialog={openDialog} closeDialog={(v) => setOpenDialog(v)} />

        </div>
    )
}

export default Hero;