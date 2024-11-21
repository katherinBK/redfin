import React from "react";
import image1 from '../Assets/img1.jpeg';
import image2 from '../Assets/img2.jpeg';
import image3 from '../Assets/img3.jpeg';
import { CCarouselItem } from '@coreui/react';
import { CCarouselCaption } from '@coreui/react';
import { CCarousel } from '@coreui/react';
import { CImage } from "@coreui/react";



function UncontrolledExample() {
  return (
    
<CCarousel controls indicators>
  <CCarouselItem id="proceso">
    <CImage className="d-block w-100" src={image1} alt="Descripción de la imagen 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Dibujos hechos a mano
      </h5>
      <p></p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={image2} alt="Descripción de la imagen 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Modelado en 3D:
      </h5>
      <p>
      .</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={image3} alt="Descripción de la imagen 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Impresión en 3D:</h5>
      <p>Para representar el modelo en 3D, la impresión en 3D es un método que resulta interesante debido a la facilidad y bajo costo en su producción.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
  )
}

export default UncontrolledExample;