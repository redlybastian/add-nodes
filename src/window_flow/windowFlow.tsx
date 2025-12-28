import { Background, BackgroundVariant, Controls, ReactFlow, type Edge, type Node } from "@xyflow/react"



const initialNode :Node[]=[
    {
        id:'1',
        data:{
            label:"Node 1"
        },
        position:{x:50,y:50}
    }, 
    {
        id:'2',
        data:{
            label:"Node 2"
        },
        position:{x:100,y:200}
    }
]

const initialEdges:Edge[] = [
    {
        id:"1-2",source:'1',target:'2',animated:true
    }
]
export const WindowFlow = ()=>{
    return(
       <div className="flex flex-col h-screen w-screen bg-slate-50">
      {/* Header Styled with Tailwind */}
      <header className="p-4 bg-white border-b shadow-sm">
        <h1 className="text-xl font-bold text-slate-800">Flow Editor</h1>
      </header>

      {/* Main Flow Area */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div 
          className="h-[80%] w-[80%] bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden"
        >
          <ReactFlow 
            fitView 
            nodes={initialNode} 
            edges={initialEdges}
          >
            {/* Explicitly defined Background */}
            <Background gap={40} size={1} variant={BackgroundVariant.Lines} color="#f1f5f9" />
            <Controls />
          </ReactFlow>
        </div>
      </main>
    </div>
    )
}