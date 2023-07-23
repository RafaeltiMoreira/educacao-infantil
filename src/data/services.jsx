import { IoBookOutline, IoBook } from "react-icons/io5";

import afroteca from '../assets/images/afroteca.pdf';
import indigenas from '../assets/images/cartilha-indigenas.pdf';


export default [
    {
        title: 'Cartilha Indígenas',
        icon: <IoBookOutline className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        embedPdf: indigenas,
        /* + `${'#toolbar=0'}`*/
    },
    {
        title: 'Afroteca',
        icon: <IoBook className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        embedPdf: afroteca,
    }
]