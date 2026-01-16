import { useState } from "react";
import { useCollections } from "../hooks/collection";
import {
  Archive,
  Clock,
  Code,
  ExternalLink,
  HelpCircle,
  Loader,
  Plus,
  Search,
  Share2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CreateCollection from "./create-collection";
import EmptyCollections from "./empty-collections";
import CollectionFolder from "./collection-folder";

interface Props {
  currentWorkspace: {
    id: string;
    name: string;
  };
}

const TabbedSidebar = ({ currentWorkspace }: Props) => {
  const [activeTab, setActiveTab] = useState("Collections");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: collections, isPending } = useCollections(currentWorkspace?.id);

  if (isPending) {
    return (
      <div>
        <Loader className="animate-spin size-4" />
      </div>
    );
  }

  const sidebarItems = [
    { icon: Archive, label: "Collections" },
    { icon: Clock, label: "History" },
    { icon: Share2, label: "Share" },
    { icon: Code, label: "Code" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Collections":
        return (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">
                  {currentWorkspace?.name}
                </span>
                <span className=""> &gt; </span>
                <span className="text-sm font-medium ">Collections</span>
              </div>
              <div className="flex items-center space-x-2">
                <HelpCircle className="size-5 cursor-pointer" />
                <ExternalLink className="size-5 cursor-pointer" />
              </div>
            </div>

            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search" className="pl-9" />
              </div>
            </div>

            <div className="px-2">
              <Button
                variant="secondary"
                onClick={() => setIsModalOpen(true)}
                className="flex mt-2 items-center justify-start gap-2 rounded-md px-2 py-1.5 hover:bg-muted cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span className="text-sm font-medium">New</span>
              </Button>
            </div>

            {
              collections && collections.length > 0 ? (
                
                collections.map((collection)=>(
                  <div className="flex flex-col justify-start items-start p-3 border-b" key={collection.id} >

                    <CollectionFolder collection={collection} />

                    

                  </div>
                ))

              ):(
                <EmptyCollections/>
              )
                

            }



          </div>
        );

      default:
        return (
          <div className="p-4 text-gray-400 ">
            
            Select a tab to view content
          </div>
        );
    }
  };

  return (
    <div className="flex h-scree">
      <div className="w-12 flex flex-col items-center py-4 space-y-4">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(item.label)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
              activeTab === item.label
                ? "bg-green-600 text-gray-300"
                : "text-zinc-200"
            }`}
          >
            <item.icon className="size-4" />
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">{renderTabContent()}</div>

      <CreateCollection
        workspaceId={currentWorkspace?.id}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default TabbedSidebar;
