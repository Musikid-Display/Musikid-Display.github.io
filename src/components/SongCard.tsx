import TiltedCard from './TiltedCard';
import cover1 from '../assets/Covers/cover1.png'
import SongInfo from './SongInfo.tsx';


export default function SongCard(){
  return(
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center"}}>
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
<SongInfo />

</div>
  )
}
