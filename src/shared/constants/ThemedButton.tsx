export default function ThemedButton(props:any) {
    return (
      <button className="m-3 w-auto bg-zinc-900 rounded-md p-3 text-center a-hover-2 t-1"
       onClick={props.onClick}>
        {props.children}
    </button>
    )
  }
  