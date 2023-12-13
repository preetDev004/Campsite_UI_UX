import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col gap-[10%] md:flex-row items-start justify-center">
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul
                  className="regular-14 flex flex-col text-gray-30 gap-4"
                >
                  {columns.links.map((link, id) => (
                    <Link key={id} href="/">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    className="flex gap-4 md:flex-col lg:flex-row"
                    key={link.label}
                    href="/"
                  
                  >
                
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70"></p>
                    {link.value}
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
            <FooterColumn title={SOCIALS.title}>
              <ul className="flex gap-4 regular-14 text-gray-30">
                {SOCIALS.links.map((link, index) => (
                  <Link
                    key={index}
                    href="/"
                  >
                    <Image src={link} height={24} width={24} alt="socials"/>
                  </Link>
                ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="bg-gray-20 border"/>
        <p className="regular-14 text-gray-30 w-full text-center">Copyright &copy; 2024 Hilink | All rights reserved | Creeated with{" 💚 "}by Preet</p>
      </div>
    </footer>
  );
};

type FCProps = {
  title: string;
  children: React.ReactNode;
};
const FooterColumn = ({ title, children }: FCProps) => {
  return (
    <div className="flex flex-col gap-5 ">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
