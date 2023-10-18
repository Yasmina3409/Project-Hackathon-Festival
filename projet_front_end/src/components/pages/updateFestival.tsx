import React, { useEffect, useState } from 'react';
import { getOneFestival, updateFestival } from '../../services/api.service';
import { useParams } from 'react-router-dom';
import { Festival } from '../../stores/useStore.tsx';

export default function UpdatePage() {
    const { id } = useParams();
    const [festival, setFestival] = useState<Festival | null>(null);
    const [idmongo, setIdmongo] = useState<string | null>()
    const [site, setSite] = useState('');
    const [titre, setTitre] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [departement, setDepartement] = useState('');
    const [periode, setPeriode] = useState('');
    const token = JSON.parse(localStorage.getItem('token') || 'null');

    useEffect(() => {
        getOneFestival(id)
        .then((res) => {
            
            // Mettre à jour les champs du formulaire avec les données du festival
            if (res && res.fields) {
                setFestival(res);
                    setIdmongo(res._id)
                    setSite(res.fields.site_internet_du_festival || '');
                    setSite(res.fields.site_internet_du_festival || '');
                    setTitre(res.fields.nom_du_festival || '');
                    setDiscipline(res.fields.discipline_dominante || '');
                    setDepartement(res.fields.departement_principal_de_deroulement || '');
                    setPeriode(res.fields.periode_principale_de_deroulement_du_festival || '');
                }
            })
            .catch((err) => console.error(err));
    }, [id]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const festivalData = {
            fields: {
                site_internet_du_festival: site,
                nom_du_festival: titre,
                discipline_dominante: discipline,
                departement_principal_de_deroulement: departement,
                periode_principale_de_deroulement_du_festival: periode,
            },
        };

        await updateFestival(festivalData, token,idmongo)
            .then((data) => {
                if (data) {
                    console.log(data);
                    localStorage.setItem('token', JSON.stringify(data));
                }
            })
            .catch((err) => {
                alert('err'+ err);
            });
    }

    return (
        <main className="prose mt-3 mb-12 flex  h-[100vh] w-screen flex-col items-center justify-start gap-3 ">
        <h1>Modifier un festival</h1>
        <form
           className={
              'flex w-full max-w-xl flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 p-4'
           }
           onSubmit={handleSubmit}>
           {/* <form > */}
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text font-bold">Site du festival</span>
              </label>
              <input
                 type="text"
                 name="site"
                 value={site}
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setSite(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text font-bold">Nom du festival</span>
              </label>
              <input
                 type="text"
                 name="titre"
                 value={titre}
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setTitre(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text font-bold">Discipline du festival</span>
              </label>
              <input
                 type="text"
                 name="discipline"
                 value={discipline}
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setDiscipline(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text font-bold">Departement du festival</span>
              </label>
              <input
                 type="text"
                 name="department"
                 value={departement}
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setDepartement(e.target.value)}
              />
           </div>
           <div className="form-control relative w-full max-w-md border border-none">
              <label className={'label'}>
                 <span className="label-text font-bold">Periode du festival</span>
              </label>
              <input
                 type="text"
                 name="periode"
                 value={periode}
                 className="max-2-xs  input input-bordered w-full"
                 required
                 onChange={e => setPeriode(e.target.value)}
              />
           </div>

           <button className="btn-light btn mt-3 w-full max-w-xs"> connexion</button>
        </form>
        
     </main>
    );
}
