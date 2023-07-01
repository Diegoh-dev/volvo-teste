// "use client";
// import { ConfigProvider, Link } from 'vcc-ui';
import Link from "next/link";
import styles from "./navbar.module.scss";
import { Roboto } from "next/font/google";
import NextLink from "next/link";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// const config = {
//   linkComponent: ({ children, href, ...linkProps }:any) => {
//     // we only want to use next/link for internal links
//     // external links are better served with an basic a tag
//     if (typeof href === 'object' || href.indexOf('/') === 0) {
//       return (
//         <NextLink href={href}>
//           <a {...linkProps}>{children}</a>
//         </NextLink>
//       );
//     }

//     return (
//       <a href={href} {...linkProps}>
//         {children}
//       </a>
//     );
//   },
// };

export function Navbar() {
  return (
    <header style={roboto.style} className={styles.containerHeader}>
     <h1 className={styles.logo}>
     <Link  href="/" >Volvo</Link>
     </h1>
      <nav>
        <ul className={styles.menuList}>
          <li className={styles.itemMenu}>
            {/* <ConfigProvider config={config}> */}
            <Link href="/">Nossos carros</Link>
            {/* </ConfigProvider> */}
          </li>
          <li className={styles.itemMenu}>
            <Link href="/">Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
