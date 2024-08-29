import { useNavigate } from "react-router-dom";
import FriendlyDogImage from "../../assets/Images/FriendlyDog.png";
import ThemedButton from "../../shared/constants/ThemedButton";

export default function Presentation() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-white w-full flex justify-evenly pt-32">
        <div className="flex justify-between items-center w-4/5">
          <div className="max-w-80 flex center-all flex-col">
            <h2 className="title">
              ¡SignLink está aquí para facilitar la comunicación!
            </h2>
            <p>
              Ofrecemos una herramienta fácil y amigable que ayuda a mejorar la
              comunicación mediante dinámicas divertidas e intuitivas.
              <br />
              <br />
              En SignLink trabajamos día a día para mejorar la experiencia
              gratuita de nuestros usuarios y agradecemos cualquier ayuda
              voluntaria.
              <br />
              <br />
              Si quieres dejar tu granito de arena, estaremos infinitamente
              agradecidos. ¡Puedes hacerlo en el botón de abajo!
            </p>
            <ThemedButton>
              <span>Donar a SignLink 🐻</span>
            </ThemedButton>
          </div>
          <div className="w-22 flex bg-zinc-950 flex-col p-2 border border-neutral-900 rounded-md">
            <h3 className="text-xl text-center mb-6">
              Funciones a la disposición de todos
            </h3>
            <div className="gap-6 flex flex-col">
              <span>
                <p className="text-sm">
                  ✔ Función de reconocimiento de lenguaje de señas
                </p>
              </span>
              <span>
                <p className="text-sm">✔ Sección de aprendizaje</p>
              </span>
              <span>
                <p className="text-sm">✔ Notas y mensajes personalizados</p>
              </span>
              <span>
                <p className="text-sm">✔ Movilización por voz en la página</p>
              </span>
              <span>
                <p className="text-sm">
                  ✔ <b>[SOLO EN TELÉFONOS] Control del entorno por voz</b>
                </p>
              </span>
              <span>
                <p className="text-sm">✔ Funciones de socialización</p>
              </span>
              <span>
                <p className="text-sm">✔ Publicaciones y mensajes diarios</p>
              </span>
            </div>
          </div>
          <div className="flex center-all flex-col">
            <img src={FriendlyDogImage} alt="A friendly dog" className="w-64" />
            <ThemedButton onClick={() => navigate("/sign-up")}>
              <span>¡Crea una cuenta gratis hoy!</span>
            </ThemedButton>
            <span>
              <b>¿O ya tienes una?</b>
            </span>
            <ThemedButton onClick={() => navigate("/sign-in")}>
              <span>Inicia sesión</span>
            </ThemedButton>
          </div>
        </div>
      </div>
    </>
  );
}
