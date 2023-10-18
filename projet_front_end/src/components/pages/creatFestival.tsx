 import React, { useState } from 'react'
// import axios from 'axios'
import {login} from '../../services/admin.service'
import { createFestival } from '../../services/api.service'
// import { useNavigate, NavLink } from 'react-router-dom'

export default function CreatPage() {
    
    const [site, setSite] = useState('')
    const [titre, setTitre] = useState('')
    const [decipline, setDecipline] = useState('')
    const [departement, setDepartement] = useState('')
    const [periode, setPeriode] = useState('')
    
    const festivalData={fields:{site_internet_du_festival:site, nom_du_festival:titre,discipline_dominante:decipline,departement_principal_de_deroulement:departement,periode_principale_de_deroulement_du_festival:periode}}
    const token = JSON.parse(localStorage.getItem('token') || 'null'); // Utilisation de null comme valeur par défaut si la clé 'token' est absente


    const handleSubmit = async(event :any) => {
        event.preventDefault();
       await createFestival(festivalData, token).then((data) => {
            if (data) {
               console.log(data)
               
            }
         }).catch(err => { alert("connexion échouée") })
        }
    
    return (
        <main className="prose mt-3 mb-12 flex  h-[100vh] w-screen flex-col items-center justify-start gap-3 ">
        <h1>Ajouter un festival</h1>
        <form
           className={
              'flex w-full max-w-xl flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 p-4'
           }
           onSubmit={handleSubmit}>
           {/* <form > */}
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text">Site du festival</span>
              </label>
              <input
                 type="text"
                 name="site"
                 placeholder="enter le nom d'utilisateur"
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setSite(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text">Nom du festival</span>
              </label>
              <input
                 type="text"
                 name="titre"
                 placeholder="enter titre du festival"
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setTitre(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text">Discipline du festival</span>
              </label>
              <input
                 type="text"
                 name="decipline"
                 placeholder="enter discipline du festival"
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setDecipline(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text">Departement du festival</span>
              </label>
              <input
                 type="text"
                 name="department"
                 placeholder="enter decipline du festival"
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setDepartement(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text">Periode du festival</span>
              </label>
              <input
                 type="text"
                 name="periode"
                 placeholder="enter periode du festival"
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setPeriode(e.target.value)}
              />
           </div>

           <button className="btn-light btn mt-3 w-full max-w-xs"> connexion</button>
        </form>
        
     </main>
    )
}

