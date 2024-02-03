"use client";
import {useState} from "react"
import {Switch} from "@nextui-org/react";
import classNames from "classnames";
export default function SelectPlan() {
    const [plan, setPlan] = useState('month');

    const contents = [
        { img: 'images/icon-arcade.svg', title: 'arcade', amount: { monthly: 9, yearly: 90 } },
        { img: 'images/icon-advanced.svg', title: 'advanced', amount: { monthly: 12, yearly: 120 } },
        { img: 'images/icon-pro.svg', title: 'pro', amount: { monthly: 15, yearly: 150 } },
    ]


    const selececPlan = () => {
        setPlan((old) => old == 'month' ? 'year' : 'month');
    }


    return (
        <div className=" h-full relative" >
            <div className="text-3xl font-bold text-default">Select Plan</div>
            <div className="text-xl text-gray-400 mb-10">You have the option of monthly or yearly billing.</div>

            <div className="flex gap-2 justify-between flex-col md:flex-row w-full mb-5">
                {contents.map((co, index) => (
                    <div className="flex md:flex-col gap-12 md:gap-5 p-3 flex-1 rounded-md border-2 border-gray-100 cursor-pointer hover:border-default hover:bg-gray-100 transition ease-in-out " key={index}>
                        <img src={co.img} className="max-w-[50px]" alt="" />
                        <div className="info flex flex-col">
                            <span className="text-default font-bold ">{co.title}</span>
                            <span className="text-gray-400 text-xs">$ {plan == 'month' ? co.amount.monthly : co.amount.yearly} / {plan == 'month' ? 'mo' : 'y'}</span>
                            {plan == 'year' && (
                                <span className="text-default font-bold text-xs">2 Moths Free</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="select bg-gray-100 py-2 w-full gap-2 font-bold flex justify-center items-center">
                <span className={classNames(plan == 'month' ? 'text-default' : 'text-gray-400') }>Monthly</span>
                <Switch onChange={selececPlan}  />
                <span className={classNames(plan != 'month' ? 'text-default' : 'text-gray-400')}>Yearly</span>
            </div>

        </div>
    )
}