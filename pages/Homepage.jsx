
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://i.ytimg.com/vi/VgttqozWzBQ/maxresdefault.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://blackbox.com.sg/wp-content/uploads/2022/04/What-does-COVID19-tell-us-about-democracy-vs-authoritarianism-1280x720-1.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.ytimg.com/vi/i0ZabxXmH4Y/maxresdefault.jpg',
    caption: 'Slide 3'
  },
];
const Homepage = () =>{

    return (
        <>
    <main>
        {/* <img src='https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-shopping.pdf' ></img> */}
        <h3 style={{textAlign: 'center', color:'black', backgroundColor:'#04AA6D', marginBottom:'1px', marginTop:'1px', padding:'8px',fontFamily:'sans-serif'}}>COVID-19 Cases</h3>
    </main>
      <div style={{backgroundColor : 'lightslategray', padding:'50px'}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
             <div className="each-slide" style={{backgroundColor : 'lightslategray',height: 720, width: 1280,   margin: 'auto'}}key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`, height: 900, width: 1600,   margin: 'auto', width: '100%', border: '3px solid grey', padding: '0px'}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div style={{backgroundColor:'lightslategray', paddingBottom: '15%'}}>
        <br />
 
    
      </div>
          </>
    )
}

export default Homepage