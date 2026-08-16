import { useNavigate } from "react-router-dom";
import { getRandomBG } from "../../utils"
import {useDispatch} from "react-redux"
import { updateTable } from "../../redux/slices/customerSlice";

const TableCard = ({ key, name, status, initial,seats }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (name) => {
        if(status === "Booked") return;
        dispatch(updateTable({tableNo:name}))
        navigate(`/menu`);
    };


  return (
    <div onClick={() => handleClick(name)} key={key} className="w-100 bg-[#262626] hover:bg-[#232323] p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center px-1
        cursor-pointer">
            <h1 className="text-[#f5f5f5] text-xl font-semibold">
                {name}
            </h1>
            <p className= {`${status === "Booked" ? "bg-[#2e4a40] text-green-600" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`}>
                {status}
            </p>
        </div>
        <div className="flex items-center justify-center mt-4 mb-4">
            <h1 className={`${getRandomBG()} text-white rounded-full p-4 text-xl`}>{initial}</h1>
        </div>
        <p className="text-[#ababab] text-xs">
            Seats: <span className="text-[#f5f5f5]">{seats}</span>
        </p>
    </div>
  )
}

export default TableCard