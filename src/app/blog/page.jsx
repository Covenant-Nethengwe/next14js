import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blog", { cache: "no-store" });
  // {next: {
  //   revalidate:3600
  // }}

  if (!response.ok) {
    throw new Error("Something went wrong!")
  }

  return response.json();
}

const Blog = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();
  return (
    <section className={ styles.container }>
      {
        posts.map((post) => (
          <aside className={ styles.post } key={ post.id }>
            <PostCard post={ post }/>
          </aside>
        ))
      }

    </section>
  )
}

export default Blog;