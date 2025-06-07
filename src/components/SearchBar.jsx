import { useState } from "react"

export const SearchByCity=({onSearch})=>{
    const [input , setInput]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault();
     onSearch(input);
  };    
    return(
        <form  className="flex mb-2">
      <input
        className="w-full p-2 rounded-l border border-gray-300 focus:outline-none"
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}type="submit" className="bg-blue-600 text-white px-4 rounded-r">
        Search
      </button>
    </form>
    )
}