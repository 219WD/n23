import cerdo from '../assets/icons/cerdo.svg';
import cebolla from '../assets/icons/cebolla.svg';
import cheddar from '../assets/icons/cheddar.svg';
import avocado from '../assets/icons/avocado.svg';
import bacon from '../assets/icons/bacon.svg';
import papas from '../assets/icons/papas.svg';
import hongo from '../assets/icons/hongo.svg';
import lechuga from '../assets/icons/lechuga.svg';
import pepinillos from '../assets/icons/pepinillos.svg';
import tomate from '../assets/icons/tomate.svg';
import salsa from '../assets/icons/salsa.svg';

const menuData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dtxdv136u/image/upload/v1733948041/1_czagpp.png",
        title: "Pattymelt",
        description: "Pan de molde, doble carne, doble cheddar, cebolla crispy, salsa de la casa.",
        presentacion: "Sumérgete en la perfección de la Pattymelt, una hamburguesa que combina el clásico pan de molde con una explosión de sabor en cada bocado. Con doble carne jugosa, doble cheddar cremoso, cebolla crujiente y nuestra salsa secreta, esta hamburguesa está diseñada para deleitar.",
        rating: "4.5",
        price: "12000",
        icons: [cheddar, cebolla, salsa]
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dtxdv136u/image/upload/v1733948039/2_suqygv.png",
        title: "Americana",
        description: "Carne, cheddar, bacon, salsa especial.",
        presentacion: "Déjate seducir por la clásica Americana, una obra maestra cargada de sabor con carne a la parrilla, queso cheddar derretido, bacon crujiente y nuestra irresistible salsa especial. ¡El sabor de Estados Unidos en tus manos!",
        rating: "4.5",
        price: "12500",
        icons: [cheddar, bacon, salsa]
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dtxdv136u/image/upload/v1733948039/3_zbvcat.png",
        title: "Portobello",
        description: "Doble carne, doble cheddar, cebolla caramelizada, portobellos, rúcula, salsa.",
        presentacion: "Experimenta la sofisticación con nuestra Portobello, una hamburguesa que mezcla lo rústico y lo elegante. Doble carne suculenta, doble queso cheddar, cebolla caramelizada, portobellos frescos y rúcula, todo coronado con una salsa exquisita.",
        rating: "5.0",
        price: "14000",
        icons: [hongo, cheddar, cebolla, lechuga, salsa]
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dtxdv136u/image/upload/v1733948039/5_nkhai7.png",
        title: "Cheddar Bacon",
        description: "Carne, cheddar, bacon, salsa especial.",
        presentacion: "Un festival de queso y bacon te espera con la Cheddar Bacon. Queso cheddar cremoso, carne jugosa y bacon extra crujiente, fusionados con nuestra exclusiva salsa especial. ¡Cada bocado es pura satisfacción!",
        rating: "4.7",
        price: "13000",
        icons: [cheddar, bacon, salsa]
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dtxdv136u/image/upload/v1733948040/6_joc0yk.png",
        title: "Clasica",
        description: "Carne, cheddar, pepinillos, cebolla, lechuga, tomate, salsa, papas.",
        presentacion: "Transporta tus sentidos a una isla paradisíaca con la Hawaiana. Jugosa carne, queso suizo fundido, piña grillada, jamón delicioso y un toque de salsa teriyaki que te hará sentir el verano en cada mordida.",
        rating: "3.9",
        price: "14500",
        icons: [cheddar, cebolla, lechuga, tomate, pepinillos ,salsa, papas]
    },
    {
        id: 7,
        image: "https://res.cloudinary.com/dtxdv136u/image/upload/v1733948041/7_fgmpyb.png",
        title: "Spicy Burger",
        description: "Carne, jalapeños, queso pepper jack, salsa picante de la casa.",
        presentacion: "Para los amantes del picante, la Spicy Burger es un desafío ardiente. Carne asada, jalapeños explosivos, queso pepper jack y nuestra salsa picante exclusiva. ¡Atrévete a probarla si puedes soportar el calor!",
        rating: "4.4",
        price: "12800",
        icons: [salsa]
    },
    {
        id: 8,
        image: "https://res.cloudinary.com/dtxdv136u/image/upload/v1733948040/8_dtu3ld.png",
        title: "Portobello",
        description: "Carne, queso brie, champiñones portobello, rúcula, salsa de ajo.",
        presentacion: "Una versión gourmet del clásico con nuestra Portobello Deluxe: carne tierna, queso brie suave, champiñones portobello y rúcula fresca, bañados en una salsa de ajo inolvidable.",
        rating: "4.8",
        price: "13700",
        icons: [salsa]
    },
    {
        id: 9,
        image: "https://res.cloudinary.com/dtxdv136u/image/upload/v1733948040/9_igwjxb.png",
        title: "Papas Cheddar",
        description: "Papas fritas con queso cheddar.",
        presentacion: "Un acompañamiento irresistible: Papas Cheddar. Papas fritas doradas y crujientes cubiertas con una generosa capa de queso cheddar derretido. ¡Perfectas para compartir o disfrutar sol@!",
        rating: "5.0",
        price: "11500",
        icons: [papas, cheddar]
    },
    {
        id: 10,
        image: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Napolitano-XL.png",
        title: "Mexicana",
        description: "Carne, queso cheddar, guacamole, pico de gallo, nachos crujientes.",
        presentacion: "Una fiesta de sabores con la Mexicana. Carne jugosa, queso cheddar, guacamole fresco, pico de gallo vibrante y nachos crujientes que le dan el toque perfecto. ¡Viva la experiencia mexicana!",
        rating: "4.1",
        price: "14200",
        icons: [cheddar, avocado]
    },
];

export default menuData;
