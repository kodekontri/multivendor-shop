import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import Alert from "../../components/alert"
import "bootstrap/dist/css/bootstrap.min.css"


export default function Basic({children}) {
    const state = useSelector(state => state)

    if(!state.user.loggedIn){
        return <Redirect
        to={{
          pathname: "/login",
        }}
      />
    }

    return (
       <div className="container">
           <header>
               <h1>Header</h1>
           </header>
           <main>
               <Alert/>
               {children}
           </main>
           <footer>
               <p className="text-center">Footer</p>
           </footer>
       </div>
    )
}
