import React from "react";

export  interface Plan {
    id: number,
    title: string,
    desc: string,
    amount: {month: number, year: number}
   
}