export default function CompleteContainer(props:any) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 p-4 flex rounded-md flex-col w-full z-50">
        {props.children}
    </div>
  )
}
