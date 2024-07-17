'use server'
import prisma from "../prisma"
import { redirect } from "next/navigation";

export async function updateTask(formData: FormData) {
    const id = formData.get("id")?.toString();
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const priority = formData.get("priority")?.toString();
    const completion = formData.get('completion')?.toString()

    if (!id || !name || !description || !priority) {
      return;
    }
  
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        name: name,
        description: description,
        priority: priority,
        completion: completion
      }
    });
    
    redirect("/");
  }