import Box from '@/components/box'
import TaskCard from '@/components/task-card'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import React, { Suspense } from 'react'

const HomePage = async () => {
  return (
    <div className='py-6'>
      <Box>
        <div className='flex items-center w-full justify-between'>
          <div>
            <h1 className='text-xl font-medium text-gray-800'>Tasks</h1>
            <p className='font-light text-gray-400 text-md'>See all Task Listed Below</p>
          </div>
          <Link href={'/new'}>
          New Task</Link>
        </div>
        <Suspense fallback={'Loading...'}>
          <TaskList />
        </Suspense>
      </Box>
    </div>
  )
}

async function TaskList(){
  const tasks = await prisma.task.findMany({})
  return(
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 border p-2'>
      {tasks.map(task => (
        <TaskCard
        key={task.id}
        task={task}
        />
      ))}
    </div>
  )
}
export default HomePage