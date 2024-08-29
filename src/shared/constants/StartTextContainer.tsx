export default function StartTextContainer(props : any) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 p-4 w-auto flex rounded-md flex-col max-w-96 min-w-72">
        {props.children}
    </div>
  )
}
