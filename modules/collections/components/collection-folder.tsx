import {
  EllipsisVertical,
  FilePlus,
  Folder,
  Trash,
  Edit,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import EditCollectionModal from "./edit-collection";
import DeleteCollectionModal from "./delete-collection";

// import EditCollectionModal from "./edit-collection";
// import DeleteCollectionModal from "./delete-collection";
// import AddRequestCollectionModal from "./add-request-modal";
// import { useGetAllRequestFromCollection } from "@/modules/request/hooks/request";
// import { REST_METHOD } from "@prisma/client";
// import { useRequestPlaygroundStore } from "@/modules/request/store/useRequestStore";

interface Props {
  collection: {
    id: string;
    name: string;
    updatedAt: Date;
    workspaceId: string;
  };
}

const CollectionFolder = ({ collection }: Props) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddRequestOpen, setIsAddRequestOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // const {
  //   data: requestData,
  //   isPending,
  //   isError,
  // } = useGetAllRequestFromCollection(collection.id);

  // const { openRequestTab } = useRequestPlaygroundStore();

  // const requestColorMap: Record<REST_METHOD, string> = {
  //   [REST_METHOD.GET]: "text-green-500",
  //   [REST_METHOD.POST]: "text-blue-500",
  //   [REST_METHOD.PUT]: "text-yellow-500",
  //   [REST_METHOD.DELETE]: "text-red-500",
  //   [REST_METHOD.PATCH]: "text-orange-500",
  // };

  // const hasRequests = requestData && requestData.length > 0;

  return (
    <>
      <Collapsible
        open={isCollapsed}
        onOpenChange={setIsCollapsed}
        className="w-full"
      >
        <div className="flex flex-col w-full">
          {/* Collection Header */}
          <div className="flex flex-row justify-between items-center p-2 flex-1 w-full hover:bg-zinc-900 rounded-md">
            <CollapsibleTrigger className="flex flex-row justify-start items-center space-x-2 flex-1">
              <div className="flex items-center space-x-1">
                {/* {hasRequests ? (
                  isCollapsed ? (
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  )
                ) : (
                  <div className="w-4 h-4" /> // Spacer when no requests
                )} */}
                <Folder className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-zinc-200 capitalize">
                  {collection.name}
                </span>
                {/* {hasRequests && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                    <span className="text-xs text-zinc-400">
                      ({requestData.length})
                    </span>
                  </div>
                )} */}
              </div>
            </CollapsibleTrigger>

            <div className="flex flex-row justify-center items-center space-x-2">
              <FilePlus
                className="w-4 h-4 text-zinc-400 hover:text-indigo-400 cursor-pointer"
                onClick={() => setIsAddRequestOpen(true)}
              />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1 hover:bg-zinc-800 rounded">
                    <EllipsisVertical className="w-4 h-4 text-zinc-400 hover:text-indigo-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem onClick={() => setIsAddRequestOpen(true)}>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="font-semibold flex justify-center items-center">
                        <FilePlus className="text-green-400 mr-2 w-4 h-4" />
                        Add Request
                      </div>
                      <span className="text-xs text-zinc-400 bg-zinc-700 px-1 rounded">
                        ⌘R
                      </span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="font-semibold flex justify-center items-center">
                        <Edit className="text-blue-400 mr-2 w-4 h-4" />
                        Edit
                      </div>
                      <span className="text-xs text-zinc-400 bg-zinc-700 px-1 rounded">
                        ⌘E
                      </span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsDeleteOpen(true)}>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="font-semibold flex justify-center items-center">
                        <Trash className="text-red-400 mr-2 w-4 h-4" />
                        Delete
                      </div>
                      <span className="text-xs text-zinc-400 bg-zinc-700 px-1 rounded">
                        ⌘D
                      </span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Collapsible Content - Requests List */}
          
        </div>
      </Collapsible>

      {/* Modals */}
      <EditCollectionModal
        isModalOpen={isEditOpen}
        setIsModalOpen={setIsEditOpen}
        collectionId={collection.id}
        initialName={collection.name}
      />

      <DeleteCollectionModal
        isModalOpen={isDeleteOpen}
        setIsModalOpen={setIsDeleteOpen}
        collectionId={collection.id}
      />

      {/* <AddRequestCollectionModal
        isModalOpen={isAddRequestOpen}
        setIsModalOpen={setIsAddRequestOpen}
        collectionId={collection.id}
        initialName="Untitled Request"
      /> */}
    </>
  );
};

export default CollectionFolder;