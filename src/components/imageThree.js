import { Parallax } from 'react-parallax';
import Jump from '../img/jump.jpg';

const ImageThree = () => (
    <Parallax className='image' bgImage={Jump} bgImageAlt="the cat" strength={800}>
        <div className='content'>
            <span className='img-txt'>A Jump to Space</span>
        </div>
    </Parallax>
);

export default ImageThree;