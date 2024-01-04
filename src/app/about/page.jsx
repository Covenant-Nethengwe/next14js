import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: 'Generated by create next app',
}

const About = () => {
  return (
    <section className={ styles.container }>
      <aside className={ styles.txtContainer }>
        <h2 className={ styles.subtitle }>About Agency</h2>
        
        <h1 className={ styles.title }>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        
        <p className={ styles.description }>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium temporibus necessitatibus, aut suscipit beatae nesciunt distinctio, sequi autem aliquam corporis delectus ea cum tenetur, ipsum asperiores officiis iusto omnis debitis.
        </p>

        <section className={ styles.boxes }>

          <aside className={ styles.box }>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </aside>

          <aside className={ styles.box }>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </aside>

          <aside className={ styles.box }>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </aside>

        </section>
      </aside>
      
      <aside className={ styles.imgContainer }>
        <Image 
          src="/about.png"
          alt="about image"
          fill
          className={ styles.image }
        />
      </aside>
    </section>
  )
}

export default About;