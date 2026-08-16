import  { useState, useEffect } from 'react'
const Greetings = () => {

  const[dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
  };

  const formatTime = (date) => 
    `${String(date.getHours().toString().padStart(2, '0'))}:${String(date.getMinutes().toString().padStart(2, '0'))}:${String(
      date.getSeconds().toString().padStart(2, '0'))}`;

  return (
    <div className="flex justify-between items-center px-8 mt-5">
        <div>
            <h1 className=" text-[#f5f5f5] text-2xl font-semibold tracking-wide
            ">Good Morning, Amrit</h1>
            <p className=" text-[#ababab] text-sm">Give your Best Services For your Customers 😀</p>
        </div>
        <div>
            <h1 className='text-[#f5f5f5] text-3xl font-bold tracking-wide w-32.5'>{formatTime(dateTime)}</h1>
            <p className='text-[#ababab] text-sm'>{formatDate(dateTime)}</p>
        </div>
    </div>
  )
}

export default Greetings