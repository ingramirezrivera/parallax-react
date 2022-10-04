import { Parallax } from 'react-parallax';
import Satelite from '../img/satelite.jpg';

const ImageFour = () => (
    <Parallax className='image' bgImage={Satelite} bgImageAlt="the cat" strength={800}>
        <div className='content'>
            <span className='img-txt'>A look from the space</span>
        </div>
    </Parallax>
);

export default ImageFour;