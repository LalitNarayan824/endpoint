"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import TabbedSidebar from "@/modules/collections/components/sidebar";
import { useWorkspaceStore } from "@/modules/layout/store";
import { useGetWorkspace } from "@/modules/workspaces/hooks/workspace";
import { Loader } from "lucide-react";

const Page = () => {
  const { selectedWorkspace } = useWorkspaceStore();

  const { data: currentWorkspace, isPending } = useGetWorkspace(
    selectedWorkspace?.id!
  );

  if (isPending) {
    return <Loader className="animate-spin size-4" />;
  }


  return (

    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={65} minSize={40} className="bg-amber-200">
        <h1>req ka area</h1>
      </ResizablePanel>
      <ResizableHandle withHandle/>
      <ResizablePanel defaultSize={35} maxSize={40} minSize={25} className="flex">
        <div className="flex-1">
          <TabbedSidebar currentWorkspace={currentWorkspace!} />
        </div>
      </ResizablePanel>


    </ResizablePanelGroup>



  )


};

export default Page;
