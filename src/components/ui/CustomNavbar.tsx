import { Navbar, Button, Text } from "@nextui-org/react";
import Image from "next/image";

export const CustomNavbar = () => {
  return (
    <>
      <Navbar isBordered variant={"sticky"}>
        <Navbar.Brand>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
          />
          <Text b color="inherit" hideIn="xs" h2>
            P
          </Text>
          <Text b color="inherit" hideIn="xs" h3>
            okeApp
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link href="#">Favoritos</Navbar.Link>
          {/* <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item> */}
        </Navbar.Content>
      </Navbar>
    </>
  );
};
