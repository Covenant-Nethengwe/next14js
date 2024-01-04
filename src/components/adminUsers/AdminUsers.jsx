import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";

const AdminUsers = async () => {

  const users = await getUsers();

  return (
    <section className={ styles.container }>
      <h1>Users</h1>
      {
        users.map((user) => (
          <aside className={ styles.user } key={user.id}>
            <section className={ styles.detail }>
              <Image src={ user.img || "/noAvatar.png" } width={ 50 } height={ 50 }/>
              <span>{ user.username }</span>
            </section>

            <form action={ deleteUser }>
              <input type="hidden" name="id" value={ user.id } />
              <button className={ styles.userButton }>Delete</button>
            </form>
          </aside>
        ))
      }
    </section>
  )
}

export default AdminUsers;