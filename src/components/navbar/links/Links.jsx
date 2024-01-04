"use client"

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";
import { auth } from "@/lib/auth";

const links = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "Blog",
    path: "/blog"
  }
];
const Links = ({ session }) => {

  const [open, setOpen] = useState();

  const isAdmin = true;

  return (
    <section className={ styles.container }>
      <aside className={ styles.links }>
        { 
          links.map((link => (
            <NavLink item={link} key={link.title}/>
          ))) 
        }

        {
          session?.user ? (
            <>
              {
                session.user?.isAdmin && <NavLink item={{ title: "Admin", path:"/admin" }} />
              }

              <form action={ handleLogout }>
                <button className={ styles.logout }>Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login"}} />
          )
        }
      </aside>

      <Image 
        className={ styles.menuButton }
        src="/menu.png" 
        alt="" 
        width={30}
        height={30}
        onClick={ () => setOpen((prev) => !prev) }
      />
      
      {
        open && <aside className={ styles.mobileLinks }>
          {
            links.map((link) => (
              <NavLink item={ link } key={ link.title }/>
            ))
          }
        </aside>
      }
    </section>
  )
}

export default Links;