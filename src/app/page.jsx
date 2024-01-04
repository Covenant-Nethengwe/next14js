import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <section className={ styles.container }>
      <aside className={ styles.txtContainer }>
        <h1 className={ styles.title }>Create Thoughts Agency.</h1>
        <p className={ styles.description }>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, possimus quae molestias, alias numquam fuga pariatur necessitatibus aspernatur dolores debitis itaque sint temporibus nostrum error voluptates, maxime doloremque libero eaque.
        </p>

        <section className={ styles.buttons }>
          <button className={ styles.button }>Learn More</button>
          <button className={ styles.button }>Contact</button>
        </section>

        <section className={ styles.brands }>
          <Image src="/brands.png" alt="" fill className={ styles.brandImg }/>
        </section>
      </aside>
      
      <aside className={ styles.imgContainer }>
        <Image src="/hero.gif" alt="" fill className={ styles.heroImg }/> 
      </aside>
    </section>
  )
}

export default Home;
