import {Suspense, useEffect, useRef, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {getOneFestival} from '../../services/api.service'
import {Festival} from '../../stores/useStore.tsx'
import Skeleton from '../atoms/skeleton.tsx'

export default function FestivalPage() {
   let {id} = useParams()
   const [festival, setFestival] = useState<Festival | null>(null)
   useEffect(() => {
      getOneFestival(id).then(res => {
         console.log(res)
         setFestival(res)
      }).catch(err => console.error(err))
   }, [id])
   console.log(id)

   if (!festival)
      return (<p>Loading...</p>)

   console.log(festival)
   return (
      <main className={'w-screen min-h-screen'}>
         <header>
            <Link className={'btn btn-link'} to={'/'}>
               <svg width='48' className={'w-6'} height='48' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                  <path fill='currentColor'
                        d='M497.333 239.999H80.092l95.995-95.995l-22.627-22.627L18.837 256L153.46 390.623l22.627-22.627l-95.997-95.997h417.243v-32z' />
               </svg>
               {' '}Retour </Link>
         </header>
         <section
            className={'flex relative mx-auto mt-12 shadow-xl shadow-base-300/60 w-full md:w-2/3 max-w-[1200px] prose md:rounded-xl border-2 pt-8 flex-col  items-center justify-center text-balance text-center '}>
            <h1 className={'m-1'}>{festival.fields.nom_du_festival}</h1>
            <p className={'m-1'}>Catégory : {festival.fields.discipline_dominante}</p>
            <p className={'badge m-1 absolute top-3 -right-4 rotate-12 badge-lg badge-secondary'}>Lieu
               : {festival.fields.departement_principal_de_deroulement}</p>
            <p>{festival.fields.periode_principale_de_deroulement_du_festival}</p>
            {festival.fields.site_internet_du_festival &&
               <Link className={'btn btn-link'} to={festival.fields.site_internet_du_festival}>Site internet du
                  festival</Link>
            }
            {festival.fields.geocodage_xy && <Suspense fallback={<Skeleton />}>
               <GoogleMap
                  commune={festival.fields?.commune_principale_de_deroulement}
                  x={festival.fields.geocodage_xy[0]}
                  y={festival.fields.geocodage_xy[1]}
               />
            </Suspense>}
         </section>

      </main>
   )
}


function GoogleMap({x, y, commune}: {x: number, y: number, commune?: string}) {
   const mapReference = useRef<HTMLDivElement>(null)
   return (
      <div
         ref={mapReference}
         id={'map'}
         className={`w-full aspect-video overflow-hidden rounded-xl p-2 `}>
         <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_API_KEY}&q=${commune},${x},${y}&zoom=8`}
            className={'h-full w-full'}
         />
      </div>
   )
}

