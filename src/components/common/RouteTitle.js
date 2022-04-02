import React from 'react'
import { useLocation } from 'react-router-dom';
import './RouteTitle.css';

const TitleRoute = ({navigation}) => {
    const items = navigation;
    const location = useLocation();
    const title = items.filter(item=>item.link===location.pathname)[0].text;
    
    if(title!=='Home')
        return(
        <div style={{background:'var(--yellow)', padding:'30px'}}>
            <div className='container'>
                <div className='routerTitle' style={{alignItems:'start'}}>
                    <label className="AboutBannerTitle" style={{color:'var(--blue)', marginBottom:0}}>{title}</label>
                    <hr className='line' style={{borderColor:'var(--white)', backgroundColor:'var(--white)', width:'7%'}}/>
                </div>
            </div>
        </div>
        )
    else
        return null
}

export default TitleRoute