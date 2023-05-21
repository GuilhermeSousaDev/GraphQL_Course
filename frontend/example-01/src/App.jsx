import { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import { client } from './config/client-graphql';

const GET_TASKS = gql`
  query {
    tasks {
      id title description
    }
  }
`;

function App() {
  const [task, setTask] = useState();
  const { loading, data: tasks } = useQuery(GET_TASKS);

  useEffect(() => {
    initial();
  }, [loading]);

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

      <h4>Tasks List</h4>
      {
        !loading ? tasks.tasks.map(task => (
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
