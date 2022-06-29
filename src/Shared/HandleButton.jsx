import Lottie from "lottie-react";
import { ThreeDots } from "react-loader-spinner";
import sucessLottie from "../assets/Lottie/sucess.json";
import errorLottie from "../assets/Lottie/error.json";

const HandleButton = ( loading, sucess, error ) => {
    if (loading) {
        return <ThreeDots color="#00BFFF" height={50} width={50} />;
    } else if (sucess) {

        return <Lottie animationData={sucessLottie} loop={false} style={{height: 50, width: 50}} />
    } else if(error) {
        
        return <Lottie animationData={errorLottie} loop={false} style={{height: 50, width: 50}} />
    } else {
        return "Cadastrar"
    }
}

export default HandleButton;