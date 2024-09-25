import { useState } from "react";
import CameraComponent from "../../tools/CameraComponent";
import ThemedButton from "../../shared/constants/ThemedButton";
import StartTextContainer from "../../shared/constants/StartTextContainer";
import { useNavigate } from "react-router-dom";

export default function SignTraductor() {
  const navigate = useNavigate();
  const [openCamera, setOpenCamera] = useState<boolean>(false);
  const [label, setLabel] = useState<string>('');

  const handleCamera = () => {
    setOpenCamera(prev => {
      console.log("Toggling camera:", !prev);
      return !prev;
    });
  };

  return (
    <section className="text-white w-full flex flex-col center-all overflow-auto p-12">
      <h2 className="text-2xl font-bold text-gray-400">Welcome to SignDec</h2>
      <div className="p-12 flex flex-wrap justify-evenly w-full mb-10">
        <div>
          {openCamera ? <CameraComponent setText={setLabel} /> : null}
          <ThemedButton onClick={handleCamera}>
            {openCamera ? "Cerrar Camara" : "Abrir Camara"}
          </ThemedButton>
        </div>
        <StartTextContainer>
          <h3>Traduccion</h3>
          <p>---</p>
          <p className="text-white break-words text-sm max-w-72">
            {label || "-Inicia la camara para empezar a traducir-"}
          </p>
          <p className="text-zinc-700 text-xs font-bold">Text correction powered by OpenAI</p>
          <ThemedButton onClick={() => setLabel('')}>Limpiar</ThemedButton>
        </StartTextContainer>
      </div>
      <div className="w-auto text-center flex flex-col bg-green max-w-3xl pb-6">
        <h4 className="text-2xl pb-6 font-semibold">SignLink - SignDec</h4>
        <p>
          This function's main objective is to encourage the learning of sign language and promote true inclusivity towards people with vocal and similar disabilities.
          <br />
          <br />
          This function is still in an early phase, although we consider that it is already widely functional, remember that you can communicate with signlink whenever you want and you can read the traductor docs in <br />
          <a className="text-blue-700 hover:cursor-pointer" onClick={() => navigate('/tools/docs')}>SignTraductor Docs</a>
          <br />
          <br />
          The use of this tool is completely free for everybody. We are dedicated to making sign language more accessible and promoting inclusivity, and your support helps us continue our mission. If you find our app valuable and would like to contribute to its ongoing development and improvement, consider making a donation. Every bit helps and is deeply appreciated. Thank you for being a part of our community and supporting our vision for a more inclusive world.
        </p>
      </div>
      <ThemedButton>Make a Donation 🐻</ThemedButton>
      
      <footer className="mt-auto text-center p-4 bg-gray-800 text-gray-300">
        <p>SignDec version beta 0.1 - SignLink</p>
      </footer>
    </section>
  );
}
