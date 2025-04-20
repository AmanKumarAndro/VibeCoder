'use client';
import { HelpCircle, LogOut, Settings, Wallet } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

function SideBarFooter() {
  const router = useRouter();
  const options = [
    {
      name: 'Settings',
      icon: Settings,
    },
    {
      name: 'Help Center',
      icon: HelpCircle,
    },
    {
      name: 'My Subscription',
      icon: Wallet,
      path: '/pricing',
    },
    {
      name: 'Sign Out',
      icon: LogOut,
    },
  ];
  const onOptionClock = (option) => {
    switch (option.name) {
      case 'My Subscription':
        router.push(option.path);
        break;
      case 'Sign Out':
        // clear local storage
        localStorage.removeItem('user');
        router.push('/');
        window.location.reload();
        console.log('Signing out...');
        break;
      case 'Settings':
      case 'Help Center':
        console.log(`${option.name} clicked`);
        break;
      default:
        break;
    }
  };
  

  return (
    <div className="p-2 mb-10">
      {options.map((option, index) => (
        <Button
          onClick={() => onOptionClock(option)}
          key={index}
          variant="ghost"
          className="w-full flex justify-start my-3"
        >
          <option.icon />
          {option.name}
        </Button>
      ))}
    </div>
  );
}

export default SideBarFooter;
