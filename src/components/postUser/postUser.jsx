import { getUser } from "@/lib/data";
import styles from "./post.module.css";
import Image from "next/image";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

//   if (!response.ok) {
//     throw new Error("Something went wrong!")
//   }

//   return response.json();
// }


const PostUser = async ({ userId }) => {

  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API

  const user = await getUser(userId);

  return (
    <section className={ styles.container }>

      <Image 
      className={ styles.avatar } 
      src={ user.img ? user.img : "/noavatar.png"}
      alt=""
      width={50}
      height={50}/>
      
      <aside className={ styles.texts }>
        <span className={ styles.title }>Author</span>
        <span className={ styles.username }>
          {
            user.username
          }
        </span>
      </aside>
    </section>
  )
}

export default PostUser;