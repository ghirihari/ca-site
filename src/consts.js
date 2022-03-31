// Images
import Image1 from './assets/tax-min.jpg'
import Image2 from './assets/audit-min.jpg'
import Image3 from './assets/business-min.jpg'
import Image4 from './assets/support.jpg'
import Image5 from './assets/audit2-min.jpg'
import Image6 from './assets/law.jpg'

import Service1 from './assets/service1.jpg'
import Service2 from './assets/service2.jpg'
import Service3 from './assets/service3.jpg'
import Service4 from './assets/service4.jpg'
import Service5 from './assets/service5.jpg'
import Service6 from './assets/service6.jpg'
import Data from "./constants.json"

export const navigation = [
    {text:'Home', link:'/'},
    {text:'About us', link:'/about'},
    {text:'Services', link:'/services'},
    {text:'Blog', link:'/blog'},
    {text:'Contact Us', link:'/contact'}
];

export const home = {
    introContent:Data.home.introContent,
    sectorData: {
        title:Data.home.subtitles[1],
        data:[
            {text:Data.home.sectorData.data[0], image:Service1},
            {text:Data.home.sectorData.data[1], image:Service2},
            {text:Data.home.sectorData.data[2], image:Service3},
            {text:Data.home.sectorData.data[3], image:Service4},
            {text:Data.home.sectorData.data[4], image:Service5},
            {text:Data.home.sectorData.data[5], image:Service6},
        ]
    },
}

const servicesData = [
    {
        image:Image1,
        captionTitle:Data.services.title[0],
        captionText:Data.services.text[0]
    },
    {
        image:Image2,
        captionTitle:Data.services.title[1],
        captionText:Data.services.text[1]
    },
    {
        image:Image3,
        captionTitle:Data.services.title[2],
        captionText:Data.services.text[2]
    },
    {
        image:Image4,
        captionTitle:Data.services.title[3],
        captionText:Data.services.text[3]
    },
    {
        image:Image5,
        captionTitle:Data.services.title[4],
        captionText:Data.services.text[4]
    },            
    {
        image:Image6,
        captionTitle:Data.services.title[5],
        captionText:Data.services.text[5]
    },
]

export const experience = {
    title:Data.home.subtitles[0],
    data:servicesData
}

export const services = {
    title:Data.services.subtitle,
    data:servicesData
}

export const carouselData = Data.home.carousel

export const bannerData = Data.home.banner

export const about = {
    content:{
        para1:Data.about.content[0],
        para2:Data.about.content[1]
    },
    banner:Data.about.banner,
    missions:{
        title:Data.about.subtitles[1],
        data:Data.about.missions},
    coreValues: {
        title: Data.about.subtitles[0],
        data: Data.about.coreValues
    },
    founder:{
        title:Data.about.subtitles[2],
        name:Data.about.founder.name,
        designation:Data.about.founder.designation
    }
}
export const mailID = Data.links.email;
export const twitter = Data.links.twitter;
export const linkedin = Data.links.linkedIn
export const phoneNumber = Data.links.phone;
export const address = Data.links.address
