import React from 'react'
import { Bell, ChevronDown, Filter, Grid, LogOut, PenSquare, Plus, Search } from "lucide-react"

export default function Machines() {
  return (
    <div className="flex h-screen bg-customGrey">
    <main className="flex-1 ">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bold">Explore Users</h1>
        <div className="flex items-center space-x-4">
            <Search className="h-16 w-10" />
          <div variant="outline" size="icon">
            <Bell className="h-16 w-10" />
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-[25px]">Marci Fumons</span>
            <ChevronDown className="w-10 h-16 ml-2" />
          </div>
        </div>
      </header>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button class='bg-grey-100 text-white font-bold h-[40px] w-[122px] rounded hover:bg-gray-300  border-solid border-[2px] border-borderGrey rounded-[10px] '>
            <div class='flex flex-row justify-content-center items-center'>
            <Filter className="w-16 h-8 text-gray-600" />
            <p class='text-gray-600'>Filter</p></div>
          </button>
          <button class='bg-grey-100 text-white font-bold h-[40px] w-[122px] rounded-[10px] hover:bg-gray-300 border-solid border-[2px] border-borderGrey'>
            <div class='flex flex-row justify-content-center items-center '>
            <p class='ml-4 text-gray-600'>Today</p>
            <ChevronDown className="w-16 h-8 text-gray-600" /></div>
            
          </button>
        
        </div>
        <div className="flex space-x-4">
          <button class='rounded-[10px] bg-customYellow w-[40px] h-[40px]'>
            <PenSquare class='text-white ml-2'/>
          </button>
          <button class=' bg-customYellow rounded-[10px] bg-blue-500 w-[40px] h-[40px]'>
              <Plus  className="text-white ml-2" />
          </button>
          <button class=' bg-customYellow rounded-[10px] bg-blue-500 w-[40px] h-[40px]'>
          <Grid className="text-white ml-2" />
          </button>
          
  
        </div>
      </div>
    </main>
  </div>
  )
}
