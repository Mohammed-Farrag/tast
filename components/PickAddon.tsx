"use client"
import {Addon} from "@/modals/Addon";
import {Checkbox} from "@nextui-org/react";
import {useState} from "react";

export default function PickAddon() {

    const [addons, setAddons] = useState( [
        {id: 1,title: 'Online Service', desc: 'Access to multiplayer games', amount: 1, checked: true},
        {id: 2,title: 'Large Storage', desc: 'Extra 1TB on cloude save', amount: 2, checked: false},
        {id: 3,title: 'Customizable Profile', desc: 'Custome theme in your profile', amount: 2, checked: false},
    ])

    const addAddOn = (id:number) => {

        setAddons((old: Addon[]) => {
           let newAddons = old.map((ad:Addon) => ad.id == id ? {...ad, checked: !ad.checked} : ad );
            return newAddons;
        })  
    }

    return (
        <div className=" h-full relative" >
            <div className="text-3xl font-bold text-default">Pick add-on</div>
            <div className="text-xl text-gray-400 mb-10">add-ons help enhance your gaming experience.</div>

            <div className="flex gap-2 justify-between flex-col  w-full">
                {addons.map((ad: Addon, index: number) => (
                    <div className="flex w-full rounded-lg justify-between items-center border-1 bg-blue-50 bg-opacity-30 border-default p-5  " key={index}>
                        <Checkbox className="me-2" isSelected={ad.checked} onChange={() => addAddOn(ad.id)} checked={ad.checked ? true : false}/>
                        <div className="flex flex-col me-auto">
                            <span className="text-default font-bold">{ad.title}</span>
                            <span className="text-gray-500 ">{ad.desc}</span>
                        </div>
                        <span className="text-default order-last">+${ad.amount}/mo</span>
                    </div>
                ))}
            </div>

        </div>
    )
}