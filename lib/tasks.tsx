import fetch from "node-fetch"

export const getAllTasksData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  )
  const tasks: any = await res.json()
  const staticfilteredTasks = tasks.sort(
    (a: any, b: any) => b.created_at - a.created_at
  )
  return staticfilteredTasks
}

export const getAllTasksIds = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  )
  const tasks: any = await res.json()
  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    }
  })
}

export const getTaskData = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`
  )
  const task: any = await res.json()
  return {
    task,
  }
}