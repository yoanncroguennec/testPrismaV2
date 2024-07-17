import { deleteTask } from '@/lib/actions/delete.task'
import { Task } from '@prisma/client'
import React from 'react'
import {FiTrash} from "react-icons/fi"

const DeleteTask = ({task}: {task: Task}) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" id='id' defaultValue={task.id} />
      <button type='submit'>
        <FiTrash className='h-4 w-4 hover:text-red-300' />
      </button>
  </form>
  )
}

export default DeleteTask