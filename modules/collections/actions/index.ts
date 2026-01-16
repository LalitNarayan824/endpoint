"use server"

import prisma from "@/lib/prisma"

export async function createCollection(workspaceId:string ,name:string){


  const collection = await prisma.collection.create({
    data:{
      name ,
      workspace:{
        connect:{
          id:workspaceId
        }
      }
    }
  });

  return collection;

}

export async function getCollections (workspaceId:string){

  const collections = await prisma.collection.findMany({
    where:{
      workspaceId
    }
  })

  return collections

}

export async function deleteCollection(collectionId:string){

  await prisma.collection.delete({
    where:{
      id:collectionId
    }
  })



} 

export async function editCollection(collectionId:string , name:string){

  await prisma.collection.update({
    where:{
      id:collectionId
    },
    data:{
      name
    }

  })


}