'use client';
import { Item } from '@/modals/Item'
import classNames from 'classnames'
import React from 'react'
function DesktopSidebar({ navItems, selectItem }: { navItems: Item[], selectItem: any }) {


  return (
    <div className="desktop-sidebar w-full relative max-w-[350px] hidden md:flex h-full">
      <img src="images/bg-sidebar-desktop.svg" className="w-full h-[100vh]" alt="" />
      <div className="flex justify-start pt-10 items-center flex-col absolute left-0 top-0 w-full h-full">

        {navItems.map((item: Item, index: number) => (
          <div key={index} className='flex w-[75%] mb-5 gap-4 cursor-pointer ' onClick={() => selectItem(item.id)} >
            <div
              className={classNames('w-10 h-10 rounded-full p-5 flex justify-center items-center border border-blue-200 font-bold',
                item.active ? "text-black bg-blue-200" : "bg-transparent text-white")}>
              {item.id}
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-sm font-bold text-blue-100 opacity-50'>{item.title}</span>
              <span className='text-sm font-bold text-white'>{item.desc.toLocaleUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default DesktopSidebar