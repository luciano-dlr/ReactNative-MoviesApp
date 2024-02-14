import ImageColors from "react-native-image-colors";
import { GradientBackground } from '../components/GradientBackground';


export const getImageColors = async (uri:string) => {
    

    //Important Leio 13/2/2024  la libreria instalada para extraer colores funciona 1.5
    const colors = await ImageColors.getColors(uri,{});

    let primary;
    let secondary;



    if (colors.platform === "android") {
        //Android
        primary = colors.dominant;
        secondary = colors.average;
        
        
    }else {
        //IOS
        primary = colors.platform
        console.log('error en getImageColors linea 17');
        
    }

    return [primary,secondary]
  

   
}