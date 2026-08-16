import { useState } from "react"
import BackButton from "../components/shared/BackButton"
import BottomNav from "../components/shared/BottomNav"
import TableCard from "../components/tables/TableCard"
import { tables } from "../constants"

const Tables = () => {

    const [status, setStatus] = useState("all")
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-7rem)] overflow-hidden ">
            <div className="flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
                        Tables
                    </h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("all")} className={`${status === "all" && "bg-[#383838]"} text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold`}>All</button>
                    <button onClick={() => setStatus("booked")} className={`${status === "booked" && "bg-[#383838]"} text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold`}>Booked</button>
                </div>

                
            </div>
                <div className="flex flex-wrap gap-5 px-16 py-4 overflow-y-scroll h-[calc(100vh-15rem)] scrollbar-none">
                    {
                        tables.map((table) => {
                            return(
                                <TableCard key={table.id} id={table.id} name={table.name} 
                                status={table.status} initial={table.initial}  seats={table.seats}/>
                            )
                        })
                    }
                </div>
            <BottomNav />
        </section>
    )
}

export default Tables