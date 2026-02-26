import HTMLImg from '../assets/htmlimg.jpg'
import CSSImg from '../assets/cssimg.avif'
import JSImg from '../assets/jsimg.jpg'
import ReactImg from '../assets/react.svg'
import BootsImg from '../assets/bootsimg.webp'
import TSImg from '../assets/tsimg.jpg'
import ReduxImg from '../assets/reduximg.webp'
import TailImg from '../assets/tailimg.webp'

export const classes = ['HTML', 'CSS', 'JS', 'ReactJS','Redux']

export const navbar = ['Home', 'Courses', 'Contact', 'FAQ']
export type CourseName = 'HTML' | 'CSS' | 'JS' | 'ReactJS' | 'Redux'

export const courses = [
    { title: 'HTML', description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.', duration: '1 month', img: HTMLImg },
    { title: 'CSS', description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.', duration: '2 months', img: CSSImg },
    { title: 'JS', description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.', duration: '3 months', img: JSImg },
    { title: 'ReactJS', description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.', duration: '2 months', img: ReactImg },
    { title: 'Bootstrap', description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.', duration: '1 month', img: BootsImg },
    { title: 'TS', description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.', duration: '2 months', img: TSImg },
    { title: 'Redux', description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.', duration: '3 months', img: ReduxImg },
    { title: 'TailwindCSS', description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.', duration: '3 months', img: TailImg },
]