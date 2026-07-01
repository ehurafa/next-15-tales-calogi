'use client';
import clsx from "clsx";

export default function Header() {
  console.log('header component');
  return(
    <h1 className={clsx(
        'text-6x1 font-bold text-blue-500',
        'hover:text-blue-50 hover:bg-blue-500',
        'transition duration-1000'
      )} onClick={() => alert('ok')}>Home</h1>
  )
}
