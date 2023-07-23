import { IoBookOutline, IoBook } from "react-icons/io5";

import afroteca from '../assets/afroteca.pdf';
import indigenas from '../assets/cartilha-indigenas.pdf';


export default [
    {
        title: 'Cartilha Indígenas',
        icon: <IoBookOutline className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        embedPdf: <embed className='md:w11/12 w-full object-cover rounded-md mt-10' src={indigenas} type="application/pdf" height={300} />,
        /* + `${'#toolbar=0'}`*/
    },
    {
        title: 'Afroteca',
        icon: <IoBook className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        embedPdf: <embed className='md:w11/12 w-full object-cover rounded-md mt-10' src={afroteca} type="application/pdf" height={300} />,
    }
]