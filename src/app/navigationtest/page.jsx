"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const NavigationTest = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  console.log(query);

  const handleClick = () => {
    console.log("Clicked");
    router.forward();
  }

  return (
    <section>
      <Link href="/" prefetch={ false }>Click here</Link>
      <button onClick={ handleClick }>Write and Redirect</button>
    </section>
  )

}

export default NavigationTest;