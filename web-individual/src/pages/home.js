import { Naves } from "../components/naves";
import { Menu } from "../components/menu";
import { MainHome } from "./home.styled";
import { MainMenu } from "./home.styled";

export function Home() {
  return (
    <>
      <MainMenu>
        <Menu />
      </MainMenu>
      <MainHome>
        <Naves />
      </MainHome>
    </>
  );
}
