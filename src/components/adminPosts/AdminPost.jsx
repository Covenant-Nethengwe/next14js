import { getPosts } from "@/lib/data";
import styles from "./adminPost.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

const AdminPost = async () => {

  const posts = await getPosts();

  // const deletePostWithId = async (id) => {
  //   "use server"
  //   return deletePost.bind(null, id);
  // }

  return (
    <section className={ styles.container }>
      <h1>Posts</h1>
      {
        posts.map((post) => (
          <aside className={ styles.post } key={post.id}>
            <section className={ styles.detail }>
              <Image src={ post.img || "/noAvatar.png" } width={ 50 } height={ 50 }/>
              <span>{ post.title }</span>
            </section>

            {/* <form action={ () => deletePostWithId(post.id) }> */}
            <form action={ deletePost }>
              <input type="hidden" name="id" value={ post.id } />
              <button className={ styles.postButton }>Delete</button>
            </form>
          </aside>
        ))
      }
    </section>
  )
}

export default AdminPost;