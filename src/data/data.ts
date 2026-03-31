import HTMLImg from '../assets/htmlimg.jpg'
import CSSImg from '../assets/cssimg.avif'
import JSImg from '../assets/jsimg.jpg'
import ReactImg from '../assets/react.svg'


export type Course = {
  title: CourseName
  description: string
  duration: string
  img: string
}

export const classes = ['HTML', 'CSS', 'JS', 'ReactJS','Redux']

export const navbar = ['Home', 'Courses', 'Contact', 'FAQ']
export type CourseName = 'HTML' | 'CSS' | 'JS' | 'ReactJS' | 'Redux'

export const courses: Course[] = [
  { title: 'HTML', description: '...', duration: '1 month', img: HTMLImg },
  { title: 'CSS', description: '...', duration: '2 months', img: CSSImg },
  { title: 'JS', description: '...', duration: '3 months', img: JSImg },
  { title: 'ReactJS', description: '...', duration: '2 months', img: ReactImg }
]