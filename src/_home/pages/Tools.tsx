import { useNavigate } from "react-router-dom";
import Container from "../../shared/constants/Container";
import PeaceSign from "../../assets/Images/Peace-SignLanguage.png";
import ThemedButton from "../../shared/constants/ThemedButton";

export default function Tools() {
  const navigate = useNavigate();
  return (
    <section className="p-6">
      <h2 className="text-xl fixed bg-black px-4 py-2">Herramientas</h2>
      <h2 className="text-xl text-center text-gray-400 pb-4 mt-10">
        Hey!, Que bueno verte, Que quieres hacer hoy...?
      </h2>
      <hr className="m-3 border-gray-400" />
      <div className="flex flex-wrap justify-evenly">
      <Container>
        <span className="text-md font-bold">Traducir lenguaje de señas</span>
        <img src={PeaceSign} alt="Peace sign" className="max-w-32" />
        <p>
          Usa la cámara de tu dispositivo para aprender y traducir lenguaje de
          señas!
        </p>
        <ThemedButton onClick={() => navigate("../tools/sign-traductor")}>
          Traducir
        </ThemedButton>
      </Container>
      <Container>
      <span className="text-md font-bold">Mas proximamente!</span>
      </Container>
      </div>
    </section>
  );
}
