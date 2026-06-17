import type { ImageMetadata } from 'astro';
import { siteConfig } from './site';

//　ロゴ画像
import logoImg from '../assets/images/logo.png';

//　メニュー / プランイメージ画像
import item01 from '../assets/images/101/101.jpg';
import item02 from '../assets/images/102/102.jpg';
import item03 from '../assets/images/201/201.jpg';
import item04 from '../assets/images/202/202.jpg';
import item05 from '../assets/images/logo.png';

type Logo = { src: ImageMetadata; alt: string; href: string };
type NavItem = { label: string; href: string };
type Item = { image: ImageMetadata; name: string; price?: string; description?: string };

export const content = {
  header: {
    logo: {
      src: logoImg,
      alt: siteConfig.name,
      href: "/",
    } satisfies Logo,
    nav: [
      { label: "Price",   href: "#price" },
      { label: "Rooms",    href: "#rooms" },
      { label: "Info",    href: "#info" },
      { label: "Access",  href: "#access" },
      { label: "Contact", href: "#contact" },
    ] satisfies NavItem[],
  },
  //　メニュー
  menu: {
    title: "Rooms",
    items: [
      { image: item01, name: "101号室", price: "10", description: "あ" },
      { image: item02, name: "102号室", price: "20", description: "い" },
      { image: item03, name: "201号室", price: "30", description: "う" },
      { image: item04, name: "202号室", price: "40", description: "え" },
    ] satisfies Item[],
  },
} as const;