 import React, { useState } from 'react'
// import axios from 'axios'
import {login} from '../../services/admin.service'
import { useNavigate } from 'react-router-dom'
// import { useNavigate, NavLink } from 'react-router-dom'

export default function LoginPage() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate= useNavigate()
    const handleSubmit = async(event :any) => {
        event.preventDefault();
       await login({ username, password }).then((data) => {
            if (data) {
               console.log(data)
               localStorage.setItem('token', JSON.stringify(data));
               navigate('/creat')
            }
         }).catch(err => { alert("connexion échouée") })
        }
    
    return (
        <main className="prose mt-12 flex  h-[70vh] w-screen flex-col items-center justify-start gap-3 pt-12 ">
        <h1>Connexion</h1>
        <form
           className={
              'flex w-full max-w-xl flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 p-4'
           }
           onSubmit={handleSubmit}>
           {/* <form > */}
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text">Nom</span>
              </label>
              <input
                 type="text"
                 name="username"
                 placeholder="enter le nom d'utilisateur"
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setUsername(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className={'label-text'}>Mot de passe</span>
              </label>
              <input
                 type="password"
                 name="password"
                 placeholder="enter le mot de passe"
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setPassword(e.target.value)}
              />
           </div>
           <button className="btn-light btn mt-3 w-full max-w-xs"> connexion</button>
        </form>
        {/* <h6 className='' > Vous avez déjà un compte  &nbsp;
                   <NavLink className="text-white" to="/login" exact={true}>Cliquez ici</NavLink>
               </h6> */}
     </main>
    )
}

