import Link from "next/link"

export default function Menu(){
    return(
        <header>
            <h1>Menu</h1>
            <nav>
                <ul>
                 <Link href="/">
                    <li>Home</li>
                </Link>
                <link href="/registro">
                    <Li>Registrar</Li>
                </link>
                </ul>
            </nav>
        </header>
    );
}