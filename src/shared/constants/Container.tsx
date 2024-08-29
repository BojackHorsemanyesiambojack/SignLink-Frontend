export default function Container(props : any) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 p-4 w-auto flex rounded-md flex-col center-all max-w-96">
        {props.children}
    </div>
  )
}
