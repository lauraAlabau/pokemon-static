import { Layout } from "@/components/layouts";
import { NextPage } from "next";
import { GetStaticProps } from 'next'


const HomePage: NextPage = (props) => {

  console.log({props})
  return (
    <Layout title="Listado de Pokémons" >
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};

export default HomePage;




export const getStaticProps: GetStaticProps = async (ctx) => {
 
  console.log("hola mundo")

  return {
    props: {
      info: "Info pasada por props desde el server side al client side"
    }
  }
}