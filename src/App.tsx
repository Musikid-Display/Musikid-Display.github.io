import { useState } from 'react'
import './Fonts.css'
import './App.css'
import TiltedCard from './components/TiltedCard';
import image1 from './assets/image.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", gap: "40px", flexWrap: "wrap", padding: "20px"}}>
<div>
<TiltedCard
  imageSrc= {image1}
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={10}
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
<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={10}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text"  style={{fontSize: "15px",fontFamily: "Akira", paddingTop: "15px", paddingLeft: "15px"}}>
      Kendrick Lamar - GNX
    </p>
  }
/>
<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={10}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text"  style={{fontSize: "15px",fontFamily: "Akira", paddingTop: "15px", paddingLeft: "15px"}}>
      Kendrick Lamar - GNX
    </p>
  }
/>
<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={10}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text"  style={{fontSize: "15px",fontFamily: "Akira", paddingTop: "15px", paddingLeft: "15px"}}>
      Kendrick Lamar - GNX
    </p>
  }
/>
<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="200px"
  containerWidth="200px"
  imageHeight="200px"
  imageWidth="200px"
  rotateAmplitude={10}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text"  style={{fontSize: "15px",fontFamily: "Akira", paddingTop: "15px", paddingLeft: "15px"}}>
      Kendrick Lamar - GNX
    </p>
  }
/>
    </div>

    </>
  )
}

export default App
