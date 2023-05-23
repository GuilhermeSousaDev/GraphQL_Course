import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/client-graphql.js'
import './index.css'
import TasksContextProvider from './context/TasksContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
