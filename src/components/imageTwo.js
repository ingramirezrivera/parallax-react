import { Parallax } from 'react-parallax';
import Launch from '../img/launch.jpg';

const ImageTwo = () => (
    <Parallax className='image' bgImage={Launch} bgImageAlt="the cat" strength={800}>
        <div className='content'>
            <span className='img-txt'>A launch to space</span>
        </div>
    </Parallax>
);

export default ImageTwo;