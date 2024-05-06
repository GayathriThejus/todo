import todoimg from "../assets/todobg.jpg"
import Todo1 from "./Todo1"

const todo = () => {
  return (
    <div className="w-full  ">
        <div className="h-[10%] ">
            {/* <img src={todoimg} className="h-[222px] w-full object-cover z-0"/> */}
              <div className=" inset-0 top-0 left-0 right-0 bottom-[57%] absolute bg-gradient-to-r from-purple-500 to-indigo-600 z-10 ">
                <p className=" flex justify-center text-[40px] text-center  mt-[70px] text-white z-30">T O D O</p>
                <Todo1 />
              </div> 
             
        </div>
    </div>
  )
}

export default todo