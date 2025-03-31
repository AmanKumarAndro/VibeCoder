"use client"
import React, { useContext } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Lookup from '@/data/Lookup'
import { Button } from '../button'
import { useGoogleLogin } from '@react-oauth/google';
import { UserDetailContext } from '@/context/UserDetailContext'
import axios from 'axios'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { v4 as uuidv4 } from 'uuid';

function SigninDialog({ openDialog, closeDialog }) {
    const { userDetail, setUserDetail } = useContext(UserDetailContext)
    const CreateUser = useMutation(api.users.CreateUser)
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    { 
                        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                        withCredentials: false
                    }
                );
                
                console.log(userInfo);
                const user = userInfo.data;
                await CreateUser(
                    {
                        name: user?.name,
                        email: user?.email,
                        picture: user?.picture,
                        uid: uuidv4()
                    }
                );
                if (typeof window !== undefined) {
                    console.log('window');
                    localStorage.setItem('user', JSON.stringify(user));
                }
                console.log("sndvnvnvnnvdf",userInfo);
                setUserDetail(userInfo?.data);
                //save user info in database
                closeDialog(false)
            } catch (error) {
                console.log(error);
            }
        },
        onError: errorResponse => console.log(errorResponse),
    });
    return (
        <Dialog open={openDialog} onOpenChange={closeDialog}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        <div suppressHydrationWarning className='flex flex-col items-center gap-2 justify-center'>
                            <p className='text-2xl font-bold text-white text-center'>{Lookup.SIGNIN_HEADING}</p>
                            <p className='mt-2 text-center'>{Lookup.SIGNIN_SUBHEADING}</p>
                            <Button onClick={googleLogin} className={'text-white  mt-3 bg-[#4285F4] hover:bg-[#4285F4]/80'}> Sign In with Google</Button>
                            <p>{Lookup.SIGNIn_AGREEMENT_TEXT}</p>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SigninDialog
