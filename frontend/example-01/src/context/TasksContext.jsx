import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { GET_TASKS } from '../graphql';

const Context = React.createContext();

export default function TasksContextProvider({ children }) {
    const { loading, data } = useQuery(GET_TASKS);

    return (
        <Context.Provider value={{ tasks: { data: data ? data.tasks : [], loading } }}>
            { children }
        </Context.Provider>
    )
}

export const useTasksContext = () => {
    return useContext(Context);
}