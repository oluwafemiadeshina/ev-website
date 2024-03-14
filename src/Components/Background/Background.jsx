import './Background.css'
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';


function Background({ playStatus, heroCount }) {
    if (playStatus) {
        return (
            <video className='background fade-in autoplay loop muted' autoPlay>
                <source src={video1} type='video/mp4'/>
            </video>
        );
    } else {
        let backgroundImage;
        switch (heroCount) {
            case 0:
                backgroundImage = image1;
                break;
            case 1:
                backgroundImage = image2;
                break;
            case 2:
                backgroundImage = image3;
                break;
            default:
                backgroundImage = image1;
        }
        return <img src={backgroundImage} className='background fade-in' alt="" />;
    }
}

export default Background;


// function Background({playStatus, heroCount}) {


//     if (playStatus){
//         return (
//              <video className='background autoplay loop muted' src="">
//                 <source src={video1} type='video/mp4'/>
//              </video>
//           )
//     }
//     else if(heroCount===0){
//        return <img src={image1} className='background' alt="" />
//     }
//     else if(heroCount===1){
//        return <img src={image2} className='background' alt="" />
//     }
//     else if(heroCount===2){
//        return <img src={image3} className='background' alt="" />
//     }
//     else{
//       return <img src={image1} className='background' alt="" />
//     }
// }

// export default Background
