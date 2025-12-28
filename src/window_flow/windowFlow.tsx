import { Box } from "@chakra-ui/react"
import { ReactFlow, type Edge, type Node } from "@xyflow/react"



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
        <Box height={'90vh'} width={'90vw'} border={'1px solid black'}>
            <ReactFlow nodes={initialNode} edges={initialEdges}>

            </ReactFlow>
        </Box>
    )
}