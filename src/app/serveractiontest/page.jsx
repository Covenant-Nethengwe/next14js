import { addPost } from "@/lib/actions";

const ServerActionTestPage = () => {
  return (
    <section>
      <form action={ addPost }>
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="description" name="description"/>
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text" placeholder="userId" name="userId"/>

        <button>Create</button>
      </form>
    </section>
  )
}

export default ServerActionTestPage;