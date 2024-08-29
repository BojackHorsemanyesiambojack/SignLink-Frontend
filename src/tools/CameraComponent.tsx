import { useCallback, useRef } from "react"
import Webcam from "react-webcam";
import ThemedButton from "../shared/constants/ThemedButton";

export default function CameraComponent() {
const webCamRef = useRef<Webcam>(null);

const capturePhoto = useCallback(() => {
    if(webCamRef.current){
        const imageSrc = webCamRef.current.getScreenshot();
        console.log(imageSrc)
    }
}, [webCamRef]);

  return (
    <div>
        <Webcam
        audio={false}
        ref={webCamRef}
        screenshotFormat="image/jpeg"
        width={540}
        height={380}
        className="rounded-md border border-neutral-900"
        />
    </div>
  )
}
