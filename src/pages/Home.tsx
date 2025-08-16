import TimeChart from '@/components/TimeChart';
import TimeForm from '@/components/TimeForm'
import { useState } from 'react'

const Home = () => {
    const [data, setData] = useState<{ activity: string; hours: number }[]>([]);
    const handleAdd = (activity: string, hours: number) => {
        setData((prev) => [...prev, { activity, hours }])
    }
    return (
        <div className='max-w-md mx-auto mt-10 bg-white shadow space-y-6 p-6 rounded'>
            <h1 className='text-2xl font-bold text-center'>⌛ Time Tracker</h1>
            <TimeForm onAdd={handleAdd} />
            <TimeChart data={data}/>
        </div>
    )
}

export default Home