"use client"
import {Item} from '@/modals/Item'
import classNames from 'classnames'
import React from 'react'
function MobileSidebar({ navItems, selectItem }: { navItems: Item[], selectItem: any }) {


  return (
    <div className="mobile-sidbar relative w-full h-[200px]  md:hidden">
      <img src="images/bg-sidebar-mobile.svg" className="w-full" alt="" />
      <div className="absolute w-full left-0 top-0 h-full px-10  flex items-center">
        <div className="flex max-w-[200px] mx-auto items-center justify-around gap-3">

          {navItems.map((i: Item, index: number) => <div
          className={classNames('w-10 h-10 rounded-full p-5 flex justify-center items-center border border-blue-200 font-bold cursor-pointer',
          i.active ? "text-black bg-blue-200" : "bg-transparent text-white")}
            onClick={() => selectItem(i.id)}
          >{i.id}</div>)}
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar