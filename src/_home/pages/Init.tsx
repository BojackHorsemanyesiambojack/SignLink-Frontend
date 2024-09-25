import { useState } from "react";
import Container from "../../shared/constants/Container";
import PeaceSign from "../../assets/Images/Peace-SignLanguage.png";
import ThemedButton from "../../shared/constants/ThemedButton";
import { useNavigate } from "react-router-dom";
import NotFoundFriendsPosts from '../../assets/Images/NotFriendsPosts.png';
import PostForm from "../../shared/constants/PostForm";

export default function Init() {
  const [time] = useState<number>(new Date().getHours());
  const navigate = useNavigate();

  const giveWelcomeMessage = (): string => {
    if (time >= 0 && time < 12) return "Good morning! Have you already had breakfast?";
    if (time >= 12 && time < 18) return "Good afternoon! What a day, huh?";
    return "Good evening! Hope you had a great day!";
  };

  return (
    <div className="text-white p-6 space-y-8">
      <h2 className="text-xl fixed px-4 py-2">Inicio</h2>

      <h2 className="text-xl text-center text-gray-400 pb-4 mt-10">
        {giveWelcomeMessage()}
      </h2>
      <hr className="m-3 border-gray-400" />

      <section className="flex flex-wrap justify-evenly gap-6">
        <Container>
          <span className="text-md font-bold">Traducir lenguaje de señas</span>
          <img src={PeaceSign} alt="Mano haciendo el signo de paz" className="max-w-32 mx-auto my-4" />
          <p className="text-gray-300">
            Usa la cámara de tu dispositivo para aprender y traducir lenguaje de señas.
          </p>
          <ThemedButton onClick={() => navigate("../tools/sign-traductor")}>
            Traducir
          </ThemedButton>
        </Container>

        <Container>
          <span className="text-md font-bold text-gray-400">Parece que tus amigos no han compartido nada...</span>
          <img src={NotFoundFriendsPosts} alt="Oso confundido al no encontrar publicaciones de amigos" className="max-w-64 mx-auto my-4" />
        </Container>
      </section>

      <h2 className="text-xl text-center text-gray-400 pb-4 mt-10">Publicaciones</h2>
      <PostForm />
    </div>
  );
}