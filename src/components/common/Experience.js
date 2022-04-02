import React, {useEffect} from 'react'
// Images
import Image1 from '../../assets/tax-min.jpg'
import Image2 from '../../assets/audit-min.jpg'
import Image3 from '../../assets/business-min.jpg'
import Image4 from '../../assets/support.jpg'
import Image5 from '../../assets/audit2-min.jpg'
import Image6 from '../../assets/law.jpg'

const Experience = ({title,count, services}) => {
    const servicesData = [
        {
            image:Image1,
            captionTitle: services.title[0],
            captionText: services.text[0]
        },
        {
            image:Image2,
            captionTitle: services.title[1],
            captionText: services.text[1]
        },
        {
            image:Image3,
            captionTitle: services.title[2],
            captionText: services.text[2]
        },
        {
            image:Image4,
            captionTitle: services.title[3],
            captionText: services.text[3]
        },
        {
            image:Image5,
            captionTitle: services.title[4],
            captionText: services.text[4]
        },            
        {
            image:Image6,
            captionTitle: services.title[5],
            captionText: services.text[5]
        },
    ]
    
    const animate = (index,height) => {
        const TYheight = `translateY(-${height}px)`
        document.getElementById('image'+index).style.transform = TYheight;
        document.getElementById('overlayTitle'+index).style.transform = TYheight;
      }
      useEffect(() => {
        for(let index = 0 ; index<count ; index++){
          const height = document.getElementById('innerCaption'+index).clientHeight+10;
    
          document.getElementById('imageTile'+index).addEventListener('mouseover',function(){
            animate(index, height);
          })
          document.getElementById('imageTile'+index).addEventListener('mouseleave',function(){
            animate(index, 10);
          })
        } 
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="expContainer">
        <div className='contentTitle'>
            <label className="subtitle">{title}</label>
            <hr className='line'/>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
            {servicesData.map((item,index)=>{
                if(index<count){
                    return(
                        <div className="col" key={index}>
                            <div id={"imageTile"+index} className="card imageCard shadow-sm imageTile">
                                <img id={"image"+index} src={item.image} className="image" alt={item.captionTitle}/>
                                <div id={'innerCaption'+index} className='innerCaption'>
                                    <label style={{fontSize:'18px'}}>{item.captionText}</label>
                                </div>
                                <div id={'overlayTitle'+index} className='overlayTitle'>
                                    <h3>{item.captionTitle}</h3>
                                </div>
                            </div>
                        </div>
                    )  
                }
                else return null
            }
            )}
        </div>
    </div>
    )
}

export default Experience

