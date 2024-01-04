import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPost from "@/components/adminPosts/AdminPost";
import AdminPostForm from "@/components/adminPostFrom/AdminPostForm";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import AdminUserForm from "@/components/adminUserFrom/AdminUserForm";
import { auth } from "@/lib/auth";

const Admin = async () => {

  const session = await auth()

  return (
    <section className={ styles.container }>
      <aside className={ styles.row }>
        <section className={ styles.col }>
          <Suspense fallback={ <span>Loading...</span> }>
            <AdminPost />
          </Suspense>
        </section>

        <section className={ styles.col }>
          <AdminPostForm userId={ session.user.id }/>
        </section>
      </aside>

      <aside className={ styles.row }>
        <section className={ styles.col }>
          <Suspense fallback={ <span>Loading...</span> }>
            <AdminUsers />
          </Suspense>
        </section>

        <section className={ styles.col }>
          <AdminUserForm/>
        </section>
      </aside>

    </section>
  )
}

export default Admin;