import { useState } from "react";
import circle from "../assets/circle.png";
import { RxCross1 } from "react-icons/rx";
import correct from "../assets/correct.png";

const style = {
  container: "w-full h-screen flex flex-col justify-center items-center relative z-40 bottom-10",
  box: "w-[348px] min-h-[57px] overflow-auto shadow-md rounded-lg bg-white",
  inputContainer: "mb-3 w-[348px] flex items-center rounded-lg shadow-md bg-white ",
  input: "h-[57px] ml-[10px] w-[293px] focus:outline-none bg-white",
  img: "w-[22px] h-[22px] ml-4 ",
  icon: "absolute right-2 top-2 w-[20px] h-[20px]",
  bottomTextContainer: "flex flex-row justify-between items-end mx-6 my-2", // Style for the bottom text container
  bottomText: "text-[11px] text-gray-500", // Style for the bottom text
  completedTask: "line-through text-gray-500", // Style for completed tasks
};

const Todo1 = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [hover, setHover] = useState(null);
  const [done, setDone] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const[filter,setFilter]=useState("All")

  const handleClick = () => {
    setDone(!done);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter((item) => item !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };
const deleteTask=(index)=>{
  const updatedTasks=[...tasks]
  updatedTasks.splice(index,1)
  setTasks(updatedTasks)
}

const filteredTasks= tasks.filter((taskText,index)=>{
  if(filter === 'All') return true;
  if(filter === 'Active') return completedTasks.includes(index);
  if(filter === 'Completed')return !completedTasks.includes(index);
  return true;
})
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        {completedTasks ? (
          <img src={circle} alt="circle" className={style.img} onClick={handleClick} />
        ):(
          <img src={correct} alt="circle" className={style.img} onClick={handleClick} />
        )}
        
        <input
          className={style.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleEnterKey}
          placeholder="Your tasks"
        />
      </div>
      <div className={style.box}>
        {filteredTasks.map((taskText, index) => (
          <div
            key={index}
            className={`w-[348px] border flex justify-between items-center mx-auto ${completedTasks.includes(index) ? style.completedTask : ""}`}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            onClick={() => toggleTaskCompletion(index)}
          >
            {completedTasks.includes(index) ? (
              <img src={correct} alt="correct" className={style.img} />
            ) : (
              <img src={circle} alt="circle" className={style.img} />
            )}
            
            <div className="h-[57px] ml-[10px] w-[293px]">
              <p className={`mt-[17px] ${completedTasks.includes(index) ? style.completedTask : ""}`}>{taskText}</p>
            </div>
            {hover === index && <RxCross1 className="mr-1" onClick={()=>{deleteTask(index)}}/>}
          </div>
        ))}
        {/* Text at the bottom of the box */}
        <div className={style.bottomTextContainer}>
          <p className={style.bottomText}>{tasks.length - completedTasks.length} tasks remaining</p>
          <p className= {`${style.bottomText} ${filter === "All" && "font-bold"}`} onClick={()=>setFilter("All")}>All</p>
          <p className={`${style.bottomText} ${filter === "Active" && "font-bold"}`} onClick={()=>setFilter("Active")}>Active</p>
          <p className={`${style.bottomText} ${filter === "Completed" && "font-bold"}`} onClick={()=>setFilter("Completed")}>Completed</p>
          <p className={style.bottomText}>Clear</p>
        </div>
      </div>
    </div>
  );
};

export default Todo1;
