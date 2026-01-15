"use client";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useWorkspaces } from "@/modules/workspaces/hooks/workspace";
import { Loader } from "lucide-react";
import { useWorkspaceStore } from "../store";
import { useEffect, useState } from "react";
import CreateWorkspace from "./create-workspace";

// type Workspace = {
//   id: string;
//   name: string;
// };

// const DUMMY_WORKSPACES: Workspace[] = [
//   { id: "1", name: "endpoint-dev" },
//   { id: "2", name: "endpoint-prod" },
//   { id: "3", name: "personal" },
// ];

export function WorkspaceSwitcher() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const {data:workspaces , isLoading} = useWorkspaces();

  const {selectedWorkspace , setSelectedWorkspace} = useWorkspaceStore();

  useEffect(()=>{
    if(workspaces && workspaces.length>0 && !selectedWorkspace){
      setSelectedWorkspace(workspaces[0]);
    }
  }, [workspaces , selectedWorkspace , setSelectedWorkspace])

  if(isLoading){
    return (
      <Loader className="animate-spin size-4" />
    )
  }

  if(!workspaces || workspaces.length===0){
    return (
      <div className="font-semibold bg-gray-700 rounded-2xl p-2">
        No Workspace Found
      </div>
    )
  }
  

  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2"
        >
          <span className="font-medium">
            {selectedWorkspace?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          Workspaces
        </DropdownMenuLabel>

        {workspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onClick={() => setSelectedWorkspace(workspace)}
            className="cursor-pointer"
          >
            {workspace.name}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem 
        className="cursor-pointer font-medium"
        onClick={()=>setIsModalOpen(true)}
        >
          + Add new workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <CreateWorkspace isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
