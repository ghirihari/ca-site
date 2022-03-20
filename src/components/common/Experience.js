import React, {useEffect} from 'react'
import {experience} from '../../consts'

const Experience = ({title,count}) => {
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
      }, []);

    return(
        <div className="expContainer">
        <div className='contentTitle'>
            <label className="subtitle">{title}</label>
            <hr className='line'/>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
            {experience.data.map((item,index)=>{
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

