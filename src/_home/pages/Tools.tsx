import { useNavigate } from "react-router-dom";
import Container from "../../shared/constants/Container";
import PeaceSign from "../../assets/Images/Peace-SignLanguage.png";
import ThemedButton from "../../shared/constants/ThemedButton";
import PolarBear from '../../assets/Images/PolarBear.png';
import TimeToLearn from '../../assets/Images/ItsTimeToLearn.png';

export default function Tools() {
  const navigate = useNavigate();

  return (
    <section className="p-6">
      <h2 className="text-xl fixed px-4 py-2">Herramientas</h2>
      <h2 className="text-xl text-center text-gray-400 pb-4 mt-10">
        ¡Hey! Qué bueno verte, ¿qué quieres hacer hoy...?
      </h2>
      <hr className="m-3 border-gray-400" />
      <div className="flex flex-wrap justify-evenly gap-2">
        <Container>
          <span className="text-md font-bold">Traducir lenguaje de señas</span>
          <img src={PeaceSign} alt="Signo de paz" className="max-w-32" />
          <p>
            Usa la cámara de tu dispositivo para aprender y traducir lenguaje de señas.
          </p>
          <ThemedButton onClick={() => navigate("../tools/sign-traductor")}>
            Traducir
          </ThemedButton>
        </Container>

        <Container>
          <span className="text-md font-bold">Documentación</span>
          <img src={PolarBear} alt="Oso polar" className="max-w-32" />
          <p>Lee la documentación de nuestras herramientas.</p>
          <ThemedButton onClick={() => navigate("../tools/docs")}>
            Documentación
          </ThemedButton>
        </Container>

        <Container>
          <span className="text-md font-bold">Es hora de aprender</span>
          <img src={TimeToLearn} alt="Es hora de aprender" className="max-w-32" />
          <p>Aprende lenguaje de señas y mucho más en SignLearn.</p>
          <ThemedButton onClick={() => navigate("../tools/docs")}>
            Ir a SignLearn
          </ThemedButton>
        </Container>
      </div>
    </section>
  );
}
