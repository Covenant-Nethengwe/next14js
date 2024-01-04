import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = ({ post }) => {
  return (
    <section className={ styles.container }>
      <aside className={ styles.top }>
        { post.img &&
          <section className={ styles.imgContainer }>
          <Image src={ post.img } alt="" fill className={ styles.img }/>
        </section> 
        }
        <span className={ styles.date }>01.01.2024</span>
      </aside>
      <aside className={ styles.bottom }>
        <h1 className={ styles.title }>
          { post.title }
        </h1>
        <p className={ styles.description }>
          { post.body }
        </p>
        <Link className={ styles.link } href={`/blog/${post.slug}`}>READ MORE</Link>
      </aside>
    </section>
    
  )
}

export default PostCard;