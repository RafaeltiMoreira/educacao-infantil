import { IoBookOutline, IoBook } from "react-icons/io5";

import afroteca from '../assets/images/afroteca.pdf';
import indigenas from '../assets/images/cartilha-indigenas.pdf';


export default [
    {
        title: 'Cartilha Indígenas',
        icon: <IoBookOutline className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        embedPdf: <iframe className='md:w11/12 w-full object-cover rounded-md' src={indigenas} type="application/pdf" height={390} />,
    },
    {
        title: 'Afroteca',
        icon: <IoBook className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        embedPdf: <iframe className='md:w11/12 w-full object-cover rounded-md' src={afroteca} type="application/pdf" height={390} />,
    }
]