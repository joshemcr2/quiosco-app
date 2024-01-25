import Image from "next/image";
import logo from "../public/assets/img/logo.svg";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image
        className="ml-10 mt-5"
        width={300}
        height={300}
        src={logo}
        alt="logo img"
      />

      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
