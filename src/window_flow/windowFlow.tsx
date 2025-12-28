import { addEdge, Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState, type Connection, type Edge, type Node } from "@xyflow/react"
import { useCallback } from "react"



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
    }, {
        id:'3',
        data:{
            label:"Node 3"
        },
        position:{x:300,y:200}
    }
]

const initialEdges:Edge[] = [
    {
        id:"1-2",source:'1',target:'2',animated:true
    }
]
export const WindowFlow = ()=>{
    const [nodes,setNodes,onNodesChange]=useNodesState(initialNode)
    const [edges,setEdges,onEdgesChange]=useEdgesState(initialEdges)

    const onConnect = useCallback(
        (params:Connection)=> setEdges((eds)=>addEdge({...params,animated:true},eds)),[setEdges]
    )
    
    return(
       <div className="flex flex-col h-screen w-screen bg-slate-50">
      {/* Header Styled with Tailwind */}
        <header className="p-4 bg-white border-b shadow-sm">
            <h1 className="text-xl font-bold text-slate-800">Flow Editor</h1>
        </header>
        <div className="flex justify-end px-6 pt-4">
            <button className="bg-black text-white px-4 py-2 rounded shadow-md hover:bg-zinc-800 transition-colors">
                Add New Node
            </button>
        </div>

      {/* Main Flow Area */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div 
          className="h-[80%] w-[80%] bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden"
        >
          <ReactFlow 
            fitView 
            nodes={nodes} 
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
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