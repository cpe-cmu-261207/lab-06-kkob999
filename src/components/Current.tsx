import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

type Bitcoin = {
    update: string;
    rate: string;
}

const Current = () => {
    const [curTime, setCurTime] = useState<Bitcoin | null>(null);
    const [curRate, setCurRate] = useState<Bitcoin | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('http://api.coindesk.com/v1/bpi/currentprice/thb.json')
            .then(resp => {
                setCurRate(resp.data.bpi.THB.rate)
                setCurTime(resp.data.time.updated)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })

    }, [])

    const render = () => {
        if (loading)
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical price</p>
                    <p className='text-2xl'>Loading ...</p>
                </div>
            )
        else if (error)
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical price</p>
                    <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
                </div>
            )
        else
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>{curRate?.toLocaleString()} THB</p>
                    <p> (Last updated {curTime}) </p>
                </div>
            )

    }


    return (
        render() 
    )

}

export default Current