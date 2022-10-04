import { Parallax } from 'react-parallax';
import Look from '../img/look.jpg';

const ImageOne = () => (
    <Parallax className='image' bgImage={Look} bgImageAlt="the cat" strength={800}>
        <div className='content'>
            <span className='img-txt'>A look to space</span>
        </div>
    </Parallax>
);

export default ImageOne;