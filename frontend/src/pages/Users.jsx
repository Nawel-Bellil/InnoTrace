import { Bell, ChevronDown, Filter, Grid, LogOut, PenSquare, Plus, Search } from "lucide-react"
//import { Button } from "@/components/ui/button"


export default function Users() {


  const users = [
    { role: "Manager", color: "text-red-500" },
    { role: "Technicien", color: "text-green-500" },
    { role: "Operater", color: "text-purple-500" },
    { role: "Technicien", color: "text-green-500" },
    { role: "Manager", color: "text-red-500" },
    { role: "Technicien", color: "text-green-500" },
    { role: "Technicien", color: "text-green-500" },
    { role: "Operater", color: "text-purple-500" },
  ]

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
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <span className={`${user.color}`}>{user.role}</span>
            </div>
          ))}
        </div>
        <div className="flex mt-4 ml-[250px] md:ml-[600px] items-center space-x-6">
          <div >
            Previous
          </div>
          <div className="flex space-x-2">
          <button class=' bg-customYellow rounded-[10px] w-[40px] h-[40px]'>
            1
            </button>
          <button class=' bg-gray-200 rounded-[10px] w-[40px] h-[40px]'>
            2
            </button>
          <button class=' bg-gray-200 rounded-[10px]  w-[40px] h-[40px] '>
            3
            </button>
            
           
          </div>
          <div>Next</div>
        </div>
      </main>
    </div>
  )
}