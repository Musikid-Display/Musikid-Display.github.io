import { useState } from 'react'
import TiltedCard from './TiltedCard';
import cover1 from '../assets/Covers/cover1.png'


export default function SongCard(){
  return(
    <div>
<TiltedCard
  coverImage= {cover1}
  altText= ""
  captionText= ""
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={8}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={false}
/>
    <p className="tilted-card-demo-text"  style={{fontSize: "15px", paddingTop: "15px", alignSelf: "center"}}>
      Turks
    </p>
        <p className="tilted-card-demo-text"  style={{fontSize: "15px",fontFamily: "Akira", alignSelf: "center", }}>
      ohsxnta
    </p>
</div>
  )
}
