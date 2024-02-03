'use client';

import DesktopSidebar from "@/components/DesktopSidebar";
import FinishingUp from "@/components/FinishingUp";
import MobileSidebar from "@/components/MobileSidebar";
import PersonalInfo from "@/components/PersonalInfo";
import PickAddon from "@/components/PickAddon";
import SelectPlan from "@/components/SelectPlan";
import { Item } from "@/modals/Item";
import classNames from "classnames";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Thank from "@/components/Thank";

export default function Home() {

  const [confirmed, setConfirmed] = useState(false);




  //Navbar Items
  const [navItems, setNavItems] = useState([
    { id: 1, title: "STEP 1", desc: "Your Info", comp: <PersonalInfo />, active: true },
    { id: 2, title: "STEP 2", desc: "Seclect Plan", comp: <SelectPlan />, active: false },
    { id: 3, title: "STEP 3", desc: "Add-ons", comp: <PickAddon />, active: false },
    { id: 4, title: "STEP 4", desc: "Summary", comp: <FinishingUp />, active: false },
  ]);


  //select navabr item
  const selectItem = (id: number) => {
    let modifiedItems = navItems.map((it: Item) =>  it.id != id ? {...it, active: false } : {...it, active: true })
    setNavItems(modifiedItems)
  }
  // go next
  const goNext = () => {

    let active = navItems.find(nav => nav.active == true);
    if (active?.id == navItems.at(navItems.length - 1)?.id) {
      setConfirmed(true)
    } else {
      let modified = navItems.map((nav: Item) => nav.id == (active?.id + 1) ? { ...nav, active: true } : { ...nav, active: false });
      setNavItems(modified)
    }
  }
  // go prev
  const goPrev = () => {
    let active = navItems.find(nav => nav.active == true);
    let modified = navItems.map((nav: Item) => nav.id == (active?.id - 1) ? { ...nav, active: true } : { ...nav, active: false });
    setNavItems(modified)
  }



  return (
    <NextUIProvider>
      <main className="flex md:w-[80%] mx-auto md:p-4 flex-col md:flex-row relative  md:bg-white flex-1 ">

        <MobileSidebar selectItem={selectItem} navItems={navItems} />

        <DesktopSidebar selectItem={selectItem} navItems={navItems} />



        <div className="content mx-auto w-[85%] flex flex-col justify-between ">

          {confirmed ? <Thank /> :
            navItems.map((i: Item, index: number) => i.active == true && <div key={index} className="md:pl-12 pt-10 md:pt-2  container -mt-16 md:-mt-0 relative z-10 ">
              <div className="rounded-xl bg-white shadow-md md:shadow-none px-5 md:px-0  py-8 z-10">
                {i.comp}
              </div>
            </div>)
          }


          {!confirmed && (

            <div className="md:pl-12 container bg-white order-last">
              <div className="actions w-full flex  mt-10 py-2 items-center bg-white">

                {!navItems.at(0)?.active && (
                  <div
                    className={classNames('text-default font-bold cursor-pointer me-auto')}
                    onClick={goPrev}>
                    Go Back
                  </div>
                )}

                <button className={classNames('bg-purple min-w-[100px] font-bold ms-auto text-white px-5 py-3 rounded-md')}
                  onClick={goNext}>
                  {(navItems.at(navItems.length - 1)?.active ? `Confirm` : `Next Step`)}
                </button>

              </div>
            </div>
          )}
          
        </div>
      </main>
    </NextUIProvider >
  );
}
