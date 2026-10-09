import React from 'react'
import { Link } from 'react-router-dom'
import { getHostVans } from '../../Api'
import { BsStarFill } from "react-icons/bs"

function Dashboard() {
  const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        setLoading(true)
        getHostVans()
            .then(data => setVans(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div className="flex items-center p-4 shadow-md bg-white h-max mb-3 m-4 rounded-xl " key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`}
                className='w-25 object-cover object-center rounded p-2'
                />
                <div className="flex flex-col gap-1">
                    <h3 className='font-bold text-2xl'>{van.name}</h3>
                    <p className='italic font-light'>${van.price}/day</p>
                </div>
                <Link to={`vans/${van.id}`} className='ml-auto px-2'>View</Link>
            </div>
        )) 

        return (
            <div className="py-10">
                <section className=''>{hostVansEls}</section>
            </div>
        ) 
    }

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <div className='bg-orange-100 '>
            <section className="bg-orange-200 p-4 flex items-center justify-between">
                <div className="  flex flex-col ">
                    <h1 className='font-bold text-3xl sm:text-4xl mb-3'>Welcome!</h1>
                    <p className='font-light sm:font-medium mb-3'>Income last <span className='underline'>30 days</span></p>
                    <h2 className='text-3xl font-bold sm:text-4xl'>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="bg-orange-300 p-4 flex gap-2 items-center h-30">
                <h2 className='font-bold text-xl'>Review score</h2>

                <BsStarFill className="text-yellow-300" />

                <p>
                    <span className='font-bold'>5.0</span>/5
                </p>
                <Link to="reviews" className='ml-auto'>Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="my-4 flex justify-between p-4">
                    <h2 className='text-xl font-bold'>Your listed vans</h2>
                    <Link to="vans" className='px-2'>View all</Link>
                </div>
                {
                    loading && !vans
                    ? <h1>Loading...</h1>
                    : (
                        <div className=''>
                            {renderVanElements(vans)}
                        </div>
                    )
                }
                {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
            </section>
        </div>
    )
}

export default Dashboard