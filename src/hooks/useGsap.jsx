import { useEffect } from 'react';
import gsap from 'gsap';

export const useGsap = (ref) => {
    useEffect(() => {
        const tl = gsap.timeline();

        // Mostrar el SVG con loading
        tl.to('.step-1', {
            opacity: 1,
            duration: 1.5,
        })
            // Ocultar el SVG inmediatamente después de que termine
            .to('.step-1', {
                opacity: 0,
                duration: 0.5,
            }, "+=0") // Inicia inmediatamente tras la anterior
    }, [ref]);
};
