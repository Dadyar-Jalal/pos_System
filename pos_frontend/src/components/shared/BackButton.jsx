import {IoArrowBackOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
const BackButton = () => {

    const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(-1)} 
    className='bg-[#005ef6] p-2 text-xl font-bold rounded-full text-[#f5f5f5] hover:bg-[#0051c6] transition-all duration-300'>
        <IoArrowBackOutline/>
    </button>
  )
}

export default BackButton