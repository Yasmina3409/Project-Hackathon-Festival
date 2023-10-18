import ky from 'ky';


const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error);
  };

const local = ky.create({
    prefixUrl:"http://localhost:8000/admin"
})


export const login = async({username, password}:{username: string, password: string}) => {
   try{
    const token: string =  await local.post('login',{json:{username: username, password: password}}).json();
   return token;
   }catch(err){
    throw getErrorMessage(err);
   }
}