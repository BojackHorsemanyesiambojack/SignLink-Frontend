import { Iform } from "../../shared/types/forms";

export const signInFormData : Array<Iform> = [
    {
        label : 'Correo Electronico',
        type : 'email',
        disabled : false,
        placeHolder : 'PolarBear@gmail.com',
        required: true,
        valueName : 'UserEmail'
    },
    {
        label : 'Contrasena',
        type : 'password',
        disabled : false,
        required: true,
        valueName: 'UserPassword'
    }
]

export const signUpFormData : Array<Iform> = [
    {
        label: 'Your Email',
        type: 'text',
        disabled:false,
        required:true,
        valueName:'UserEmail',
    },
    {
        label: 'Your Password',
        type: 'password',
        disabled:false,
        required:true,
        valueName:'UserPassword',
    },
    {
        label: 'Your Nick',
        type: 'text',
        disabled:false,
        required:true,
        valueName:'UserName',
    }
]

export const signUpFormDataCredentials:Array<Iform> = [
    {
        label : 'Correo Electronico',
        type : 'email',
        disabled : false,
        placeHolder : 'PolarBear@gmail.com',
        required: true,
        valueName : 'Email'
    },
    {
        label : 'Contrasena',
        type : 'password',
        disabled : false,
        required: true,
        valueName: 'Password'
    }
]

export const signUpFormProfile:Array<Iform> = [
    {
        label : 'Elige una foto de perfil',
        type : 'file',
        disabled : false,
        placeHolder : 'PolarBear@gmail.com',
        required: true,
        valueName : 'imageUrl'
    },
    {
        label : 'Elige un nombre de usuario',
        type : 'password',
        disabled : false,
        required: true,
        valueName: 'userName'
    }
]