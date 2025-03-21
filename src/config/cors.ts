import { CorsOptions } from "cors";

export const corsConfig : CorsOptions = {
    origin: (origin, callback) => {
        const whiteList = [process.env.FRONTEND_URL];

        if(whiteList.includes(origin)) {
            callback(null, true); // Permitir conexión
        } else {
            callback(new Error('Error de CORS'));
        }
    }
}