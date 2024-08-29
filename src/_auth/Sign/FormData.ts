import { Iform } from "../../shared/types/forms";

export const signInFormData : Array<Iform> = [
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

export const signUpFormData : Array<Iform> = [
    {
        label: 'Your Name',
        type: 'text',
        disabled:false,
        required:true,
        valueName:'firstName',
    },
    {
        label: 'Your Last Name',
        type: 'text',
        disabled:false,
        required:true,
        valueName:'firstName',
    },
    {
        label: 'Your Nick',
        type: 'text',
        disabled:false,
        required:true,
        valueName:'lastName',
    },
    {
        label: 'Your BirthDate',
        type: 'date',
        disabled:false,
        required:true,
        valueName:'birthDate',
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