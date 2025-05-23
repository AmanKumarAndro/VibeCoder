'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Button } from '../ui/button';
import Colors from '@/data/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import Link from 'next/link';
import { Download, Rocket } from 'lucide-react';
import { useSidebar } from '../ui/sidebar';
import { usePathname } from 'next/navigation';
import { ActionContext } from '@/context/ActionContext';
import { useState } from 'react';
import SignInDialog from './SignInDialog';

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const { action, setAction } = useContext(ActionContext);
  const { toggleSidebar } = useSidebar();
  const [openDialog, setOpenDialog] = useState(false);
  const pathname = usePathname();
  const onActionBtn =(actn) => {
    setAction({
      actionType: actn,
      timeStamp: Date.now()
    })

  }
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href={'/'}>
        <Image src={'/logo2.png'} alt="logo" width={40} height={40} />
      </Link>
      {!userDetail?.name ? (
        <div className="flex gap-5">
          <Button variant="ghost" onClick={() => setOpenDialog(true)}>Sign In</Button>
          <Button
            className="text-white"
            style={{
              backgroundColor: Colors.BLUE,
            }}
          >
            Get Started
          </Button>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          {pathname.includes('/workspace/') && (
            <>
              <Button variant="ghost" onClick={() => onActionBtn('export')}>
                <Download /> Export
              </Button>
              <Button
                onClick={() => onActionBtn('deploy')}
                className="text-white"
                style={{
                  backgroundColor: Colors.BLUE,
                }}
              >
                <Rocket /> Deploy
              </Button>
            </>
          )}
          {userDetail && (
            <Image
              onClick={toggleSidebar}
              src={userDetail?.picture}
              alt="userImage"
              width={40}
              height={40}
              className="rounded-full cursor-pointer object-cover"
            />
          )}
        </div>
      )}
       <SignInDialog
        openDialog={openDialog}
        closeDialog={(v) => setOpenDialog(v)}
      />
    </div>
  );
}

export default Header;
