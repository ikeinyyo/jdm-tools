import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { WebPageLink } from "./bento/WebPageLink";
import Image from "next/image";

const links = [
  {
    url: "/post-generator",
    label: "Post Generator",
    colSpan: "col-span-4",
    rowSpan: "row-span-3",
    bg: "bg-dark",
  },
  {
    url: "/tables",
    label: "Tables",
    colSpan: "col-span-2",
    rowSpan: "row-span-3",
    colStart: "col-start-5",
    bg: "bg-primary",
  },
  {
    url: "/event-maker",
    label: "Event Maker",
    colSpan: "col-span-6",
    rowStart: "row-start-4",
    bg: "bg-primary",
  },
];

const socialLinks = [
  {
    url: "https://instagram.com/juernesdemesa",
    icon: <FaInstagram className="h-16 w-16" />,
  },
  {
    url: "https://twitter.com/juernesdemesa",
    icon: <FaXTwitter className="h-16 w-16" />,
  },
  {
    url: "https://facebook.com/juernesdemesa",
    icon: <FaFacebook className="h-16 w-16" />,
  },
  {
    url: "https://chat.whatsapp.com/IRPGENoZMqkKgckTD35eeZ",
    icon: <FaWhatsapp className="h-16 w-16" />,
  },
];

const Bento = () => (
  <div className="flex flex-row justify-center items-center">
    <div className="grid grid-cols-6 grid-rows-5 gap-2 h-120 w-4xl">
      {links.map(
        ({ url, label, colSpan, rowSpan, colStart, rowStart, bg }, index) => (
          <div
            key={index}
            className={`rounded-xl flex justify-center items-center ${bg} ${colSpan} ${rowSpan} ${
              colStart || ""
            } ${rowStart || ""}`}
          >
            <WebPageLink
              url={url}
              component={<span className="uppercase">{label}</span>}
              size="small"
            />
          </div>
        )
      )}

      <div className="col-start-5 row-start-5 col-span-2 bg-dark rounded-xl flex justify-center items-center">
        <WebPageLink
          url="https://www.juernesdemesa.com/"
          component={
            <Image
              src="/images/logo.png"
              width={100}
              height={50}
              alt="Logo de Juernes de Mesa"
            />
          }
        />
      </div>

      {socialLinks.map(({ url, icon }, index) => (
        <div
          key={index}
          className={`row-start-5 col-start-${
            index + 1
          } bg-primary rounded-xl flex justify-center items-center`}
        >
          <WebPageLink url={url} component={icon} size="small" />
        </div>
      ))}
    </div>
  </div>
);

export { Bento };
