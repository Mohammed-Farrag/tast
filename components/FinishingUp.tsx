import { Plan } from "@/modals/Plan";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";

export default function FinishingUp() {

    const [plan, setPlan] = useState('month');

    const [plans, setPlans] = useState([
        { id: 1, title: 'Arcade', desc: 'rem ipsum dolor sit amet, consectetur adipiscing elit', amount: { month: 9, year: 90 } },
        { id: 1, title: 'Online Service', desc: 'rem ipsum dolor sit amet, consectetur adipiscing elit', amount: { month: 12, year: 120 } },
        { id: 1, title: 'Local Storage', desc: 'rem ipsum dolor sit amet, consectetur adipiscing elit', amount: { month: 15, year: 150 } },
    ])


    const changePlan = (id:number) => {
        setPlan(old => old == 'month' ? 'year': 'month');
    }

    const total = () => {
        let tot;
        if(plan == 'month') {
            tot = plans.reduce((prev: number, cur: Plan) => prev + cur.amount.month , 0);
        }else{
            tot = plans.reduce((prev: number, cur: Plan) => prev + cur.amount.year , 0);
        }

        return tot;
    }

    return (
        <div className="h-full  mx-auto " >
            <div className="text-xl md:text-3xl font-bold text-default">Finishing Up</div>
            <div className="text-sm md:text-xl text-gray-400 mb-3 md:mb-10">Double-check everything looks OK before confirmation</div>

            <Accordion className="bg-[#edfaff] p-3 rounded-lg font-bold">
                {plans.map((p: Plan, index: number) => (
                    <AccordionItem 
                        key={index} 
                        hideIndicator 
                        className=" text-default" 
                        aria-label={p.title} 
                        title={p.title + `${plan == 'month' ? ' (Monthly)': ' (Yearly)'}`}>
                        <div className="font-normal justify-between flex">{p.desc} 
                            <span className="font-bold text-default">${plan == 'month' ? p.amount.month : p.amount.year}/{plan == 'month'? 'mo':'yr'}</span>
                        </div> 
                        <span 
                            className="underline text-gray-500 font-normal text-sm cursor-pointer" 
                            onClick={() => changePlan(p.id)}>Change</span>
                    </AccordionItem>
                    
                ))}

            </Accordion>

            <div className="total flex justify-between px-4 py-3 font-bold">
                <span className="text-gray-400">Total (per {plan == 'month' ? 'Month': 'Year'} )</span>
                <span className="text-purple">+${total() }/{plan == 'month'? 'mo':'yr'}</span>
            </div>

        </div>
    )
}