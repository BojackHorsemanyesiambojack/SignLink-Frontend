import { ChangeEventHandler, FormEventHandler } from "react";
import { Iform } from "../types/forms";
import ThemedButton from "./ThemedButton";
import { ClipLoader } from "react-spinners";

export default function Form({Action, Map, HandleChange, OnSubmit, Values, isLoading} :
    {Action:string, Map:Array<Iform>, HandleChange : ChangeEventHandler, OnSubmit : FormEventHandler
      Values : any, isLoading : boolean
    }) {
  return (
    <form action={Action} className="my-4 flex flex-col text-start gap-4" onSubmit={OnSubmit}>
        {Map.map((current, index) => (
            <div key={index} className="flex justify-between flex-col">
            <span className="mr-3">{current.label}</span>
            <input type={current.type} maxLength={current.maxLength? current.maxLength : 300}
            minLength={current.minLength? current.minLength : 0}
            className="rounded-sm bg-zinc-900 p-1 border border-zinc-700"
            name={current.valueName}
            required = {current.required? true : false} onChange={HandleChange}
            value={Values[`${current.valueName}`] || ''}
            />
            </div>
        ))}
        {isLoading?
        <ClipLoader color="#36D7B7" />
        :
        <ThemedButton><input type="submit" value={'Enviar'} /></ThemedButton>
      }
    </form>
  )
}
