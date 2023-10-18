import ky from 'ky'

import {Festival} from '../stores/useStore.tsx'

const getErrorMessage = (error: unknown) => {
   if (error instanceof Error) return error.message
   return String(error)
}

const local = ky.create({
   prefixUrl: 'http://localhost:8000/',
})

export const getSampleFestivals = async () => {
   try {
      const festivals: Festival[] = await local.get('').json()
      return festivals
   } catch (err) {
      throw getErrorMessage(err)
   }
}

export const getFestivalByDpt = async (dpt: string) => {
   const NUMBER_OF_RESULTS = 50
   try {
      const festivals: Festival[] = await local.post('dpt', {json: {dpt: dpt}}).json()
      const sliced = festivals.slice(0, NUMBER_OF_RESULTS)
      // Return all data and splice in UI => pagination
      console.log(sliced.length, festivals.length)
      return festivals.slice(0, NUMBER_OF_RESULTS)
   } catch (err) {
      throw getErrorMessage(err)
   }
}

export const getFestivalByName = async(nom:string) =>{
    try{
        const festivals = await local.post('nom', {json:{nom: nom}}).json();
        return festivals
    }catch(err){
        throw getErrorMessage(err)
    }
}
export const getOneFestival = async (recordid: string) => {
   try {
      const festival: Festival[] = await local.get(recordid).json()
      console.log('FROM SERVICE', festival)
      return festival[0]
   } catch (err) {
      throw getErrorMessage(err)
   }
}

export const updateFestival = async(festival:Festival, token:string, recordid:string) => {
    try{
        const updatedFestival: Festival = await local.put(recordid,{json:{festival:festival}, headers:{'Authorization': `Bearer ${token}`
    }}).json();

        return updatedFestival;
    }catch(err){
        throw getErrorMessage(err)
    }
}

export const createFestival = async(festival:Festival, token: string) => {
    try{
        const newFestival: Festival = await local.post('',{json:{festival}, headers:{'Authorization': `Bearer ${token}`}}).json()
        return newFestival;
    }catch(err){
        throw getErrorMessage(err)
    }
}
