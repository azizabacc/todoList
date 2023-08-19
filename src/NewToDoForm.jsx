import { useState } from "react"


export const NewTodoForm = ({ onSubmit }) => {
  const [newTask, setNewTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask === "") return

    onSubmit(newTask)

    setNewTask("")
  }

  return (
    <form name='todoForm' id='todoForm' onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          type="text"
          id="item"
          className=" text-zinc-950 outline-none border-2 border-hsl-200 bg-hsl-200 text-hsl-200 rounded-md py-1 px-2"
        />
      </div>
      <button className="bg-hsl-200 border-2 border-hsl-200 text-hsl-200 py-1 px-2 rounded-md cursor-pointer outline-none transition duration-300 hover:bg-hsl-200/5 focus-visible:bg-hsl-200/5">Add</button>
    </form>
  )
}