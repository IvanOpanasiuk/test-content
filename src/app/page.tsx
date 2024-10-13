'use client';

import Image from "next/image";
import styles from "./page.module.css";
import {Button} from "@IvanOpanasiuk/content/src";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button label={"Click me"} onClick={() => console.log("Button clicked!")} />
    </div>
  );
}
