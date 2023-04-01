import { FC, ReactNode } from "react";

import Head from "next/head";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title = "PokemonApp" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Laura Alabau" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
