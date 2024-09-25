import { useState } from "react";
import TopNavBarInDocs from "../shared/nav/TopNavBarInDocs";
import SignLink from "./contents/SignLink";
import { useNavigate} from "react-router-dom";

export default function DocsLayout(props:any) {
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const pageIndexation = [<SignLink />]
  return (
  <div className="flex min-h-screen">
  <nav className="w-64 fixed top-0 left-0 h-screen text-white p-6 bg-zinc-950 border border-zinc-900 overflow-y-auto">
    <div className="flex flex-col justify-between mb-5">
      <p className="text-sm font-semibold text-zinc-600 hover:cursor-pointer hover:text-blue-600"
      onClick={() => navigate('/home')}
      >
        Volver a SignLink</p>
    <h1 className="text-xl font-bold">SignLink</h1>
    </div>
    <h2 className="text-xl font-bold mb-6">Documentación</h2>
    <ul>
      <li><a href="#introduccion" className="block py-2 px-4 hover:bg-gray-700 rounded">SignLink</a></li>
      <li><a href="#instalacion" className="block py-2 px-4 hover:bg-gray-700 rounded">Sign-Dec (Traductor de lenguaje de señas)</a></li>
    </ul>
  </nav>

  <main className="flex-1 ml-64 p-6 px-10 overflow-y-auto">
    {pageIndexation[index]}
  </main>
</div>

  )
}
