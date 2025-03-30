import Image from 'next/image'
import React from 'react'
import { Button } from '../button'
import Colors  from '@/data/Colors'

function Header() {
  return (
      <div className='flex justify-between items-center p-4'>
          <Image className='cursor-pointer rounded-full w-20 h-20 object-cover' src="/logo.png" width={100} height={100} alt="logo" />
          <div className="flex gap-4">
              <Button variant="ghost">Sign In</Button>
              <Button className="text-white" style={{backgroundColor:Colors.BLUE}} >Get Started</Button>
          </div>
    </div>
  )
}

export default Header