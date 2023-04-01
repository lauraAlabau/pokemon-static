import { Layout } from "@/components/layouts";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokémons" >
      <h1>Home Page</h1>
      <Button color={"gradient"}>Click me</Button>
    </Layout>
  );
};

export default HomePage;
