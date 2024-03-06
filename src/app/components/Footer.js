import Link from "next/link"
import styles from "./menu.module.css"
import Image from "next/image";

export default function Menu(){
    return(
        <footer className={styles.cabecalho}>
            <Image
            width={100}
            height={100}
            
            src={'https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png'}/>

            
        </footer>
    );
}