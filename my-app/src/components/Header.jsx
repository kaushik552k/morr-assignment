import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'


export default function Header() {
    return (
        <>
        <nav class="navbar navbar-dark bg-primary">
    <a class="navbar-brand">DEMO Streaming</a>
        <div class="d-flex">
    
    <p className="login">Log In</p>
    <button className="button" >Start your free trial</button>
  </div>
</nav>
        </>
    )
}
