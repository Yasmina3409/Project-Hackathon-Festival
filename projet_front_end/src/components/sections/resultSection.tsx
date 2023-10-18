import SelectDepartement from '../organisms/selectDepartement'
import {Festival, useStore} from '../../stores/useStore.tsx'
import {useEffect, useState} from 'react'
import {getSampleFestivals} from '../../services/api.service'
import {Link} from 'react-router-dom'
const token = JSON.parse(localStorage.getItem('token') || 'null'); // Utilisation de null comme valeur par défaut si la clé 'token' est absente

export default function ResultSection() {
   const store = useStore(state => state)
   // console.log(store)
   const [errorMessage, setErrorMessage] = useState<null | string>(null)

   const [useFestivals, setUseFestivals] = useState<Festival[] | null>(null)

   useEffect(() => {
      // If there are departments in the store we don't need to fetch them again
      if (store.festivalsByDpt && store.festivalsByDpt.length > 0) return

      // If there are festivals in the store we don't need to fetch them again
      else if (store.festivals && store.festivals.length > 0) return

      // If there are no festivals in the store we fetch them
      else {
         getSampleFestivals().then((data) => {
            if (data) {
               store.setFestivals(data)
            }
         }).catch(error => setErrorMessage(error.message))
      }
   }, [])

   useEffect(() => {
      if (store.festivalsByDpt && store.festivalsByDpt.length > 0) {
         setUseFestivals(store.festivalsByDpt)
      } else if (store.festivals && store.festivals.length > 0) {
         setUseFestivals(store.festivals)
      }
   }, [store.festivalsByDpt, store.festivals])

   if (!useFestivals) {
      return <div id='results'
                  className={'flex flex-wrap gap-4 mt-4 justify-center'}>
         {Array.from({length: 30}, (_, i) => i).map(i => <div key={i}
                                                              className='w-full aspect-square sm:w-128 md:w-96 shadow-xl bg-gray-400 animate-pulse rounded-xl' />)}

      </div>
   }

   return <section id={'results'} className={'w-full flex flex-col items-center min-h-screen min-h-48'}>

      <div className={'w-full bg-base-200 justify-center flex flex-wrap gap-2 items-center '}>
         <SelectDepartement />
         <SearchName />
      </div>
      <h2
         className={'my-8 uppercase tetx-xl font-bold'}>{useFestivals.length > 0 ? useFestivals.length > 1 ? `RESULTATS : ${useFestivals.length}` : 'RESULTAT : ' : 'Pas de résultats trouvés'}</h2>
      {
         errorMessage ? <p>{errorMessage}</p> :
            <ul className={'flex flex-wrap gap-4 mt-4 justify-center'}>{useFestivals.map((festival) => {
               return (/*<li key={festival.recordid}>{festival.recordid}</li>*/
                  <Card festival={festival} />)
            })}</ul>
      }

   </section>
}


function SearchName() {
   return <div className='relative form-control w-full max-w-xs border'>
      <label className='label'>
         <span className='label-text'>Comment s'appelle le festival</span>
      </label>
      <input type='text' autoComplete={'none'} placeholder='Type here'
             className='input input-bordered w-full max-w-xs' />
      <label className='label'>
         <span className='label-text-alt'>{' '}</span>
      </label>
   </div>
}

function Card({festival}: {festival: Festival}) {
   return <li
      className='card w-full sm:w-128 md:w-96 bg-base-100 shadow-xl border-base-300 hover:scale-105 transition '>
      <figure className='mx-2 mt-2 h-48 overflow-hidden rounded-xl'>
      <div className='card-actions absolute right-3 top-3'>
      {token !== null && (
              <Link
              to={`/update/${festival.recordid}`}
              className="badge aspect-square h-12 w-12 rounded-lg opacity-80  hover:opacity-100 ">
              <svg
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                 <path
                    fill="currentColor"
                    d="M20.71 7.04c-.34.34-.67.67-.68 1c-.03.32.31.65.63.96c.48.5.95.95.93 1.44c-.02.49-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24l-.96-.96l-1.42 1.41l-3.75-3.75l3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57l3.75 3.75L6.75 21H3v-3.75Z"
                 />
              </svg>
           </Link>
          )}
         </div>
         <img className={'object-cover w-full h-full object-center'} src='/confet-sd.jpg' alt='Shoes' />
      </figure>
      <div className='card-body items-center text-center'>
         <h2 className='card-title'>{festival.fields.nom_du_festival}</h2>
         <p className={'h-min'}>{festival.fields.periode_principale_de_deroulement_du_festival}</p>
         <div className='card-actions'>
            <Link to={`/festival/${festival.recordid}`} className='btn btn-primary'>Plus d'informations</Link>
         </div>
      </div>
   </li>
}
