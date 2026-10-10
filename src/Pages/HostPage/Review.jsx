import React from 'react'
import ReviewGraph from "../../assets/images/reviews-graph.png"
import { BsStarFill } from "react-icons/bs";

function Review() {
  const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
        <section className="bg-orange-200">
            <div className="px-3 py-10 flex items-center gap-3 mb-2">
                <h2 className='font-bold text-2xl sm:text-3xl'>Your reviews</h2>
                <p className='font-extralight'>
                    Last <span className='underline'>30 days</span>
                </p>
            </div>
            <img
                className="p-3 mb-4 w-full h-full object-cover object-center"
                src={ReviewGraph}
                alt="Review graph"
            />
            <h3 className='p-3 font-bold text-xl sm:text-2xl mb-3'>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id} className='py-8'> 
                    <div className="p-3 ">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="inline-block m-2 text-amber-500 cursor-pointer" key={i} />
                        ))}
                        <div className="flex items-center gap-2">
                            <p className="font-bold sm:text-xl">{review.name}</p>
                            <p className="font-light sm:text-xs">{review.date}</p>
                        </div>
                        <p className='font-medium sm:font-normal tracking-tight'>{review.text}</p>
                    </div>
                    <hr className='text-black hover:text-blue-500'/>
                </div>
            ))}
        </section>
    )
}

export default Review