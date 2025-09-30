import { Metadata } from 'next'
import styles from './About.module.css'

export const metadata: Metadata = {
    title: "About Page",
    description: "This is the about page"
}

export default function AboutPage(){
    return (
        <div>
            <h1 className={styles.text_style}>This is the About page</h1>
        </div>
    )
}