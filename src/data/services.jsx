import { IoBookOutline, IoBook } from "react-icons/io5";

import afroteca from '../assets/afroteca.pdf';
import indigenas from '../assets/cartilha-indigenas.pdf';

export default [
    {
        title: 'Cartilha Indígenas',
        icon: <IoBookOutline className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        imgUrl: '',
        embedPdf: indigenas,
        workUrl: 'https://drive.google.com/file/d/1UvMHErodebo0Bqy-0kVn9FTBY43yh-wA/view?usp=sharing',
    },
    {
        title: 'Afroteca',
        icon: <IoBook className='w-full h-full' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
        imgUrl: '',
        embedPdf: afroteca,
        workUrl: 'https://drive.google.com/file/d/1PbCIqb11sk4G2386BtPsAi5JssrwTqTL/view?usp=sharing',
    }
]