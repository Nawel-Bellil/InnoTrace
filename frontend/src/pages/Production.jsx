import React from 'react'
// import { Bell, ChevronDown, Filter, MoreVertical, Pencil, Play, Plus, Search,PenSquare } from "lucide-react"
import { Bell, ChevronDown, Filter, Grid, PenSquare,MoreVertical,Pencil,Play, Plus, Search, } from "lucide-react"
import { Card, CardContent, Typography, CardHeader, Button } from "@mui/material";


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
      ]


    
      return (
        <div className="flex h-screen bg-customGrey">
        <main className="flex-1 ">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold">Explore Productions</h1>
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
        
          <div className="space-y-6">
        {productions.map((production, index) => (
          <Card key={index}>
            <div class='flex flex-row justify-between'>
            <Typography class='ml-5 mt-2' style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'gray-500' }}>
            {production.type}
            </Typography>
              <Button class='bg-gray-200 p-2 rounded-[10px] mr-[40px] mt-2' >
                <ChevronDown  style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'gray-500' }} />
              </Button>
            </div>
            <CardContent>
              {production.productions.map((production2, productionIndex) => (
                <div key={productionIndex} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${production.type === "Finished" ? "bg-green-100" : "bg-orange-100"}`}>
                      <Pencil className={`h-4 w-4 ${production.type === "Finished" ? "text-green-500" : "text-orange-500"}`} />
                    </div>
                    <span>{production2.name}</span>
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
  )
}