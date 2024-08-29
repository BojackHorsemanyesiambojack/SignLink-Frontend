import { useState } from "react";
import Container from "../../shared/constants/Container";
import PeaceSign from '../../assets/Images/Peace-SignLanguage.png';
import ThemedButton from "../../shared/constants/ThemedButton";
import ConfusedBear from "../../assets/Images/ConfusedBear.png";
import { useNavigate } from "react-router-dom";

export default function Init() {
  const [time, setTime] = useState<number>(new Date().getHours());
  const navigate = useNavigate();

  const giveWelcomeMessage = (): string => {
    return time >= 0 && time < 12
      ? "Good morning! Have you already had breakfast?"
      : "Good afternoon! What a day, huh?";
  };

  return (
    <div className="text-white p-6">
      <h2 className="text-xl fixed bg-black px-4 py-2">Inicio</h2>
      <h2 className="text-xl text-center text-gray-400 pb-4 mt-10">
        {giveWelcomeMessage()}
      </h2>
      <hr className="m-3 border-gray-400" />
      <section className="flex flex-wrap justify-evenly">
        <Container>
          <span className="text-md font-bold">Traducir lenguaje de señas</span>
          <img src={PeaceSign} alt="Peace sign" className="max-w-32" />
          <p>Usa la cámara de tu dispositivo para aprender y traducir lenguaje de señas!</p>
          <ThemedButton onClick = {() => navigate('../tools/sign-traductor')}>Traducir</ThemedButton>
        </Container>
        <Container>
          <span className="text-gray-400">Parece que tus amigos no han compartido nada...</span>
          <img src={ConfusedBear} alt="A confused bear" className="max-w-32" />
        </Container>
      </section>
    </div>
  );
}
