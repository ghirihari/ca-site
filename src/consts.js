// Icons
import {FaChartLine} from 'react-icons/fa';
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {RiGovernmentLine, RiLightbulbFlashLine, RiTruckLine, RiHomeGearLine} from 'react-icons/ri'
import {FaRegHandshake, FaTasks} from 'react-icons/fa'
import {IoGlassesOutline} from 'react-icons/io5'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {RiHandHeartLine} from 'react-icons/ri'
import {GrCertificate} from 'react-icons/gr'

// Images
import Image1 from './assets/tax-min.jpg'
import Image2 from './assets/audit-min.jpg'
import Image3 from './assets/business-min.jpg'
import Image4 from './assets/support.jpg'
import Image5 from './assets/audit2-min.jpg'
import Image6 from './assets/law.jpg'

export const navigation = [
    {text:'Home', link:'/'},
    {text:'About us', link:'/about'},
    {text:'Services', link:'/services'},
    {text:'Blog', link:'/blog'},
    {text:'Contact Us', link:'/contact'}
];

export const home = {
    introContent:'J VISHNU & ASSOCIATES is a firm of Chartered Accountants in India, headquartered in Coimbatore. The firm was founded by J. Vishnu Sanker, providing services in  Audit, Assurance, Direct Taxation, GST and consultancy services.',
    sectorData: {
        title:'Experience in sectors',
        data:[
            {text:'Manufacturing, Textile and Infotech', icon:<RiHomeGearLine size='75px'/>},
            {text:'Finance, Banking, Retail and Trading', icon:<FaChartLine size='75px'/>},
            {text:'Jewellery Food Processing, FMCG and Healthcare', icon:<MdOutlineHealthAndSafety size='75px'/>},
            {text:'NGO/NPO, Charity and Education', icon:<RiGovernmentLine size='75px'/>},
            {text:'Energy, Capital, Goods, Chemical and Fertiliser', icon:<RiLightbulbFlashLine size='75px'/>},
            {text:'Automobile, Machinery and Construction', icon:<RiTruckLine size='75px'/>},
        ]
    },
}

const servicesData = [
    {
        image:Image1,
        captionTitle:'Direct & Indirect Taxation',
        captionText:'Our experienced team of professionals provide comprehensive taxation solutions to our clients.'
    },
    {
        image:Image2,
        captionTitle:'Audit & Assurance',
        captionText:`Our firm's qualified professionals provide serivices in-line with Standards on auditing.`
    },
    {
        image:Image3,
        captionTitle:'Business Advisory Services',
        captionText:`Our firm's exposure in various sectors helps us serve our clients with dynamic advisory services.`
    },
    {
        image:Image4,
        captionTitle:'Accounting & Supporting Services',
        captionText:'Our firm provides accounting and reporting services in line with Accounting Standards.'
    },
    {
        image:Image5,
        captionTitle:'Internal Audit',
        captionText:`Our firm provides internal audit services to suit organisation needs.`
    },            
    {
        image:Image6,
        captionTitle:'Corporate Law Compliance',
        captionText:`Our firm's experienced professionals provide timely compliance and other corporate support services.`
    },
]

export const experience = {
    title:'Our experience',
    data:servicesData
}

export const services = {
    title:'Our services',
    data:servicesData
}

export const about = {
    content:{
        para1:`A strong team of inhouse professionals/Articled/Audit Assistants and other associates providing services in Taxation, Business Advisory, Corporate Compliance, Business Support Services. Our firm's policy ensures exemplary services to each client irrespective of location and size. This is attained by our specilized and cross-functional teams.`,
        para2:'The firm is engaged in providing services to Corporates, Firms, and Individuals tailored to meet their requirements. Our exposure to various sectors  gives us a distinctive ability to implement tailored solutions that suit our clients’ unique business needs. Our strategy involves implementing internal knowledge management systems to deliver performance-based and technology-enabled business advisory services to our clients.'
    },
    missions:[
        'To provide exemplary financial servics to our clients in a timely manner.',
        'To constantly aim for higher specialisation to meet our stakeholders requirements.',
        'To promote a healthy working environment ensuring a trustworthy relationship with out stakeholders.'
    ],
    coreValues: {
        title: 'Core values',
        data: [
            {title:'Compliance', icon:<GrCertificate/>},
            {title:'Growth Oriented', icon:<AiOutlineAreaChart/>},
            {title:'Integrity', icon:<FaRegHandshake/>},
            {title:'Ethical Values', icon:<IoGlassesOutline/>},
            {title:'Focus on Objectives', icon:<FaTasks/>},
            {title:'People First', icon:<RiHandHeartLine/>},
        ]
    }
}
export const mailID = "audit@jvishnuca.in";
export const twitter = {userid:'@sanker_vishnu',link:'https://twitter.com/sanker_vishnu'};
export const linkedin = "https://www.linkedin.com/in/ca-vishnu-sanker-44584b140/"
export const phoneNumber = ['0422-4952586','+91 96593 79621'];
export const address = {
    text:'1st Floor, 23-4, Sambandam Rd E, R.S. Puram, Coimbatore, Tamil Nadu 641002',
    link:'https://www.google.com/maps/place/J+VISHNU+%26+ASSOCIATES+-+Chartered+Accountants/@11.0088447,76.95156,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba8599556793d77:0x9433556b3e79fd70!8m2!3d11.0088447!4d76.9537487?hl=en-US',
}
