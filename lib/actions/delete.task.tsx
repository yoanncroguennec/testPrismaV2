'use server'
import prisma from "../prisma"
import { revalidatePath } from "next/cache";


export async function deleteTask(formData: FormData) {
    try {
      const taskId = formData.get("id")?.toString();
      if (!taskId) {
        return;
      }
    
      await prisma.task.delete({
        where: {
          id: taskId
        },
      });
    
    } catch (error) {
      console.log("Error " + error)
    }
    revalidatePath("/");
  }
  