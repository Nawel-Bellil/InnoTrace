import { Bell, ChevronDown, Filter, Grid, PenSquare, Plus, Search } from "lucide-react";
import { useState } from "react"; // Import useState

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
    { role: "Manager", color: "text-red-500" },
    { role: "Technicien", color: "text-green-500" },
  ];

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 6;

  // Calculate the index for slicing the users array
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  // Handler functions for pagination
  const handleNext = () => {
    if (endIndex < users.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex h-screen bg-customGrey">
      <main className="flex-1 p-4 md:p-8">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">Explore Users</h1>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Search className="h-8 w-8 md:h-10 md:w-10" />
            <div variant="outline" size="icon">
              <Bell className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-lg md:text-[25px]">Marci Fumons</span>
              <ChevronDown className="w-8 h-8 md:w-10 md:h-10 ml-2" />
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <button className='bg-grey-100 text-white font-bold h-[40px] w-[122px] rounded hover:bg-gray-300 border-solid border-[2px] border-borderGrey'>
              <div className='flex flex-row justify-center items-center'>
                <Filter className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                <p className='text-gray-600'>Filter</p>
              </div>
            </button>
            <button className='bg-grey-100 text-white font-bold h-[40px] w-[122px] rounded-[10px] hover:bg-gray-300 border-solid border-[2px] border-borderGrey'>
              <div className='flex flex-row justify-center items-center'>
                <p className='ml-4 text-gray-600'>Today</p>
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </div>
            </button>
          </div>
          <div className="flex space-x-4">
            <button className='rounded-[10px] bg-customYellow w-[40px] h-[40px] flex items-center justify-center'>
              <PenSquare className='text-white' />
            </button>
            <button className='bg-customYellow rounded-[10px] w-[40px] h-[40px] flex items-center justify-center'>
              <Plus className="text-white" />
            </button>
            <button className='bg-customYellow rounded-[10px] w-[40px] h-[40px] flex items-center justify-center'>
              <Grid className="text-white" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {currentUsers.map((user, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <span className={`${user.color}`}>{user.role}</span>
            </div>
          ))}
        </div>

        <div className="flex mt-4 justify-center items-center space-x-6">
          <button onClick={handlePrevious} className="text-lg" disabled={currentPage === 0}>
            Previous
          </button>
          <div className="flex space-x-2">
            <button className='bg-customYellow rounded-[10px] w-[40px] h-[40px]'>
              {currentPage + 1}
            </button>
            {endIndex < users.length && (
              <button className='bg-gray-200 rounded-[10px] w-[40px] h-[40px]'>
                {currentPage + 2}
              </button>
            )}
          </div>
          <button onClick={handleNext} className="text-lg" disabled={endIndex >= users.length}>
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
