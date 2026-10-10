import React from 'react'
import Graph from "../../assets/images/income-graph.png"

function Income() {
 const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <section className="bg-orange-200">
            <h1 className='mx-4 font-bold text-2xl py-4 sm:text-3xl'>Income</h1>
            <p className='mx-4 my-2 font-medium sm:text-2xl'>
                Last <span className='underline'>30 days</span>
            </p>
            <h2 className='mx-4 my-4 font-bold text-3xl mb-10 sm:text-4xl'>$2,260</h2>
            <img
                className="w-full max-w-md p-3"
                src={Graph}
                alt="Income graph"
            />
            <div className="mx-4 flex justify-between mb-2">
                <h3 className='text-xl font-bold'>Your transactions (3)</h3>
                <p className='font-light text-gray-800'>
                    Last <span className='underline'>30 days</span>
                </p>
            </div>
            <div className="mx-4 py-10">
                {transactionsData.map((item) => (
                    <div key={item.id} className="bg-white flex justify-between mb-3 p-4 rounded shadow-md">
                        <h3 className='font-bold text-xl'>${item.amount}</h3>
                        <p className='font-light text-gray-800'>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Income