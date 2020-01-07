//todas as ações relacionadas às tarefas
const createNewTaskAction = (input) => {
    return {
      type: "CREATE_NEW_TASK",
      payload: {input: input.target.value}
    }
  }
  
  const listAllTasksAction = () => {
    return {
      type: "LIST_ALL_TASKS",
      payload: {}
    }
  }
  
  const listCompletedTasksAction = () => {
    return {
      type: "LIST_COMPLETED_TASKS",
      payload: {}
    }
  }
  
  const listPendingTasksAction = () => {
    return {
      type: "LIST_PENDING_TASKS",
      payload: {}
    }
  }
  
  const tasksShownCurrentScreenAction = () => {
    return {
      type: "TASKS_SHOWN_CURRENT_SCREEN",
      payload: {}
    }
  }
