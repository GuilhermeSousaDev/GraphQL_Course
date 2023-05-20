import { useEffect, useState } from "react";
import { gql } from '@apollo/client';
import { client } from './config/client-graphql';

function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    initial();
  }, []);

  const initial = () => {
    client.query({
      query: gql`
        query {
          task(id: 3) {
            id 
            title
            description
          }
        }
      `,
    }).then(res => setTask(res.data.task));
  }

  const handleListTasks = async () => {
    const data = await client.query({
      query: gql`
        query {
          tasks {
            id title description
          }
        }
      `,
    });
    
    setTasks(data.data.tasks);
  }

  return (
    <div>
      <h3>One Task with Id: 3</h3>
      { task && (
        <>
          { task.id } <br />
          { task.title }
          <br />
          { task.description }
        </>
      )}
      <br /> <br />

      <button onClick={handleListTasks}>List Tasks</button>
      <h4>Tasks List</h4>
      { tasks && tasks.map(task => (
        <div key={task.id}>
          <p>{ task.id }</p>
          <p>{ task.title }</p>
          <p>{ task.description }</p>
        </div>
      )) }
    </div>
  )
}

export default App
