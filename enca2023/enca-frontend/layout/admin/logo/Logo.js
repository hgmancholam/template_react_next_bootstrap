import logo from "../../../assets/images/logos/green-logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/admin">
      <a>
        <Image src={logo} alt="texto alterno" />
      </a>
    </Link>
  );
};

export default Logo;
