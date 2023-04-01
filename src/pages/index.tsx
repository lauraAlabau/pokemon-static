import { Button } from "@nextui-org/react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Button color={"gradient"}>Click me</Button>
    </>
  );
};

export default HomePage;
