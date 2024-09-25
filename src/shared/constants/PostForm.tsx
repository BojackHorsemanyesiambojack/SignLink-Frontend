import ThemedButton from "./ThemedButton";

export default function PostForm() {
  return (
    <div className="flex items-center w-1/2 flex-col p-3">
        <h3 className="text-md text-zinc-500 font-bold">Que tienes para compartir?</h3>
        <form className="w-full">
        <textarea className="w-full bg-zinc-900 resize-none border border-white rounded-md"></textarea>
        <ThemedButton>
        <input type="submit" value="Publicar" />
        </ThemedButton>
        </form>

    </div>
  )
}
