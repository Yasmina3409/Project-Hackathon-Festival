import {ReactNode} from 'react';

export type T_ClassName = {
   className: string
}

export type T_Children = {
   children: ReactNode
}


export type Signup = {
   username: string
   email: string
   password: string
}

export type Login = {
   username: string
   password: string

}
export type LoginRequestError = {
   message: string
   token: null
}
export type LoginRequestSuccess = {
   message: string
   token: string

}

