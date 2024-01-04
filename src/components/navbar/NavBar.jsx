import Links from "./links/Links";
import Link from 'next/link';
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const NavBar = async () => {

  const session = await auth();

  return (
    <section className={ styles.container }>
      <Link href="/" className={ styles.logo }>
        Logo
      </Link>
      
      <aside>
        <Links session={ session }/>
      </aside>
    </section>
  )
}

export default NavBar;