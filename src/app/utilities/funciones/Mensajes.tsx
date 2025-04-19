import {ToastOptions, toast} from 'react-toastify';

const configuracionMensaje: ToastOptions = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    draggable: false,
    closeButton: true,
    theme: 'dark'
}

export const generarMensaje = (tipo: string, mensaje: string) => {

    switch (tipo.toLowerCase()) {
        case "success":
            toast.success(mensaje, configuracionMensaje);
            break;
    
        case "error":
            toast.error(mensaje, configuracionMensaje);
            break;
    
        case "info":
            toast.info(mensaje, configuracionMensaje);
            break;
    
        case "warning":
            toast.warning(mensaje, configuracionMensaje);
            break;

    
        default:
            toast.dismiss();
            break;
    }

}