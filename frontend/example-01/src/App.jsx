import { useTasksContext } from "./context/TasksContext";

function App() {
  const { tasks } = useTasksContext();

  return (
    <div>
      <h4>Tasks List</h4>
      
      {
        !tasks.loading ? tasks.data.map(task => (
          <div key={task.id}>
            <p>{ task.id }</p>
            <p>{ task.title }</p>
            <p>{ task.description }</p>
          </div>
        )) : '...Loading'
      }
    </div>
  )
}

export default App
