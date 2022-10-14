import imgLeft from '../img/Rectangle 11.png';
import imgCenter1 from '../img/Rectangle 10.png';
import imgCenter2 from '../img/Rectangle 9.png';
import imgRight1 from '../img/Rectangle 6.png';
import imgRight2 from '../img/Rectangle 7.png';
function Gallery() {
  return (
    <div className="gallery-main container">
      <div className="gallery-img-left">
        <img src={imgLeft} alt=""></img>
        <div className="gallery-img-right-title"></div>
      </div>
      <div className="gallery-img-center">
        <img src={imgCenter1} alt=""></img>
        <img src={imgCenter2} alt=""></img>
      </div>
      <div className="gallery-img-right">
        <img src={imgRight1} alt=""></img>
        <img src={imgRight2} alt=""></img>
      </div>
    </div>
  );
}
export default Gallery;
