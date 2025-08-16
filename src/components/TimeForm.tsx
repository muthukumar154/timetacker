import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface Props{
    onAdd:(activity:string, hours:number) => void
}

const TimeForm = ({onAdd}:Props) => {
    const [activity, setActivity] = useState("");
    const [hours, setHours] = useState("");
    const handleSubmit = ()=>{
        if(!activity.trim() || !hours) return alert("Please fill it");
        onAdd(activity, Number(hours))
        setActivity("");
        setHours("");

    }
    return (
        <div>
            <Input
                className="mb-3"
                placeholder="Activity (e.g sleep)"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />
            <Input
                type="tel"
                className="mb-3"
                placeholder="Hours (e.g 8)"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
            />
            <Button className="w-full" onClick={handleSubmit}>
                Add Activity
            </Button>
        </div>
    )
}

export default TimeForm