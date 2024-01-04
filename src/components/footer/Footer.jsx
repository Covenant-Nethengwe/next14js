import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={ styles.container }>
      <aside className={ styles.logo }>
        lamadev
      </aside>
      <aside className={ styles.text }>
        Lama creative thoughts agency © All rights reserved.
      </aside>
    </section>
  )
}

export default Footer;