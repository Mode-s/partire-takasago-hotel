import type { ImageMetadata } from 'astro';
import { siteConfig } from './site';

//　ロゴ画像
import logoImg from '../assets/images/logo.png';

//　メニュー / プランイメージ画像
import room101_01 from '../assets/images/101/101.jpg';
import room101_02 from '../assets/images/101/room01.jpg';
import room101_03 from '../assets/images/101/room02.jpg';
import room101_04 from '../assets/images/101/room03.jpg';
import room101_05 from '../assets/images/101/room04.jpg';
import room101_06 from '../assets/images/101/room05.jpg';
import room101_07 from '../assets/images/101/room06.jpg';
import room101_08 from '../assets/images/101/room07.jpg';
import room101_09 from '../assets/images/101/room08.jpg';
import room101_10 from '../assets/images/101/room09.jpg';
import room101_11 from '../assets/images/101/room10.jpg';
import room101_12 from '../assets/images/101/room11.jpg';
import room101_13 from '../assets/images/101/room12.jpg';
import room101_14 from '../assets/images/101/room13.jpg';
import room101_15 from '../assets/images/101/room14.jpg';
import room101_16 from '../assets/images/101/room15.jpg';
import room101_17 from '../assets/images/101/room16.jpg';
import room101_18 from '../assets/images/101/room20.jpg';
import room101_19 from '../assets/images/101/room18.jpg';
import room101_20 from '../assets/images/101/room19.jpg';

import room102_01 from '../assets/images/102/102.jpg';
import room102_02 from '../assets/images/101/room16.jpg';
import room102_03 from '../assets/images/101/room01.jpg';
import room102_04 from '../assets/images/101/room02.jpg';
import room102_05 from '../assets/images/101/room03.jpg';
import room102_06 from '../assets/images/101/room04.jpg';
import room102_07 from '../assets/images/101/room05.jpg';
import room102_08 from '../assets/images/101/room06.jpg';
import room102_09 from '../assets/images/101/room07.jpg';
import room102_10 from '../assets/images/101/room08.jpg';
import room102_11 from '../assets/images/101/room09.jpg';
import room102_12 from '../assets/images/101/room10.jpg';
import room102_13 from '../assets/images/101/room11.jpg';
import room102_14 from '../assets/images/101/room12.jpg';
import room102_15 from '../assets/images/101/room13.jpg';
import room102_16 from '../assets/images/101/room14.jpg';

import room201_01 from '../assets/images/201/201.jpg';
import room201_02 from '../assets/images/201/room01.jpg';
import room201_03 from '../assets/images/201/room03.jpg';
import room201_04 from '../assets/images/201/room04.jpg';
import room201_05 from '../assets/images/201/room05.jpg';
import room201_06 from '../assets/images/201/room06.jpg';
import room201_07 from '../assets/images/201/room07.jpg';
import room201_08 from '../assets/images/201/room08.jpg';
import room201_09 from '../assets/images/201/room09.jpg';
import room201_10 from '../assets/images/201/room10.jpg';
import room201_11 from '../assets/images/201/room11.jpg';
import room201_12 from '../assets/images/201/room12.jpg';
import room201_13 from '../assets/images/201/room13.jpg';
import room201_14 from '../assets/images/201/room14.jpg';
import room201_15 from '../assets/images/201/room15.jpg';
import room201_16 from '../assets/images/201/room16.jpg';
import room201_17 from '../assets/images/201/room17.jpg';
import room201_18 from '../assets/images/201/room18.jpg';
import room201_19 from '../assets/images/201/room19.jpg';
import room201_20 from '../assets/images/201/room20.jpg';

import room202_01 from '../assets/images/202/202.jpg';
import room202_02 from '../assets/images/202/room01.jpg';
import room202_03 from '../assets/images/202/room02.jpg';
import room202_04 from '../assets/images/202/room03.jpg';
import room202_05 from '../assets/images/202/room04.jpg';
import room202_06 from '../assets/images/202/room05.jpg';
import room202_07 from '../assets/images/202/room07.jpg';
import room202_08 from '../assets/images/202/room08.jpg';
import room202_09 from '../assets/images/202/room09.jpg';
import room202_10 from '../assets/images/202/room11.jpg';

type Logo = { src: ImageMetadata; alt: string; href: string };
type NavItem = { label: string; href: string };
type Room = { id: string; images: ImageMetadata[]; name: string; airbnb: string; booking: string; };

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
  rooms: {
    title: "Rooms",
    items: [
      { id: "101", name: "101号室", images: [room101_01, room101_02, room101_03, room101_04, room101_05, room101_06, room101_07, room101_08, room101_09, room101_10, room101_11, room101_12, room101_13, room101_14, room101_15, room101_16, room101_17, room101_18, room101_19, room101_20], airbnb: siteConfig.room.a101, booking: siteConfig.room.b101 },
      { id: "102", name: "102号室", images: [room102_01, room102_02, room102_03, room102_04, room102_05, room102_06, room102_07, room102_08, room102_09, room102_10, room102_11, room102_12, room102_13, room102_14, room102_15, room102_16,], airbnb: siteConfig.room.a102, booking: siteConfig.room.b102 },
      { id: "201", name: "201号室", images: [room201_01, room201_02, room201_03, room201_04, room201_05, room201_06, room201_07, room201_08, room201_09, room201_10, room201_11, room201_12, room201_13, room201_14, room201_15, room201_16, room201_17, room201_18, room201_19, room201_20], airbnb: siteConfig.room.a201, booking: siteConfig.room.b201 },
      { id: "202", name: "202号室", images: [room202_01, room202_02, room202_03, room202_04, room202_05, room202_06, room202_07, room202_08, room202_09, room202_10 ], airbnb: siteConfig.room.a202, booking: siteConfig.room.b202 },
    ] satisfies Room[],
  },
} as const;