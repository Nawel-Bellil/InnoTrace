import React from 'react';
import { Bell, ChevronDown, Filter, Grid, PenSquare, MoreVertical, Pencil, Play, Plus, Search } from "lucide-react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function Production() {
  const productions = [
    {
      type: "In Progress",
      productions: [
        { name: "Production1", duration: "25m 20s" },
        { name: "Production2", duration: "25m 20s" },
        { name: "Production3", duration: "25m 20s" },
        { name: "Production4", duration: "25m 20s" },
      ],
    },
    {
      type: "Finished",
      productions: [
        { name: "Production5", duration: "30m 0s" },
        { name: "Production2", duration: "30m 0s" },
        { name: "Production1", duration: "30m 0s" },
        { name: "Production6", duration: "30m 0s" },
        { name: "Production10", duration: "30m 0s" },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-customGrey">
      <main className="flex-1 p-4 md:p-8">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">Explore Productions</h1>
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

        <div className="space-y-6">
          {productions.map((production, index) => (
            <Card key={index} className="mb-4">
              <div className='flex flex-row justify-between items-center p-4'>
                <Typography className='text-lg md:text-2xl font-bold' style={{ color: 'gray' }}>
                  {production.type}
                </Typography>
                <Button className='bg-gray-200 p-2 rounded-[10px]'>
                  <ChevronDown style={{ fontSize: '1.5rem', color: 'gray' }} />
                </Button>
              </div>
              <CardContent>
                {production.productions.map((production2, productionIndex) => (
                  <div key={productionIndex} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${production.type === "Finished" ? "bg-green-100" : "bg-orange-100"}`}>
                        <Pencil className={`h-4 w-4 ${production.type === "Finished" ? "text-green-500" : "text-orange-500"}`} />
                      </div>
                      <span className="text-base md:text-lg">{production2.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>{production2.duration}</span>
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
