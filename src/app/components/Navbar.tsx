import Link from "next/link"

const Navbar = () => {

    return (
        <div>
            <Link href="/">
                <h1>Visual Impairment Simulator</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Contact</Link>
                </li>
                <li>
                    <Link href="/">Try it out!</Link>
                </li>
            </ul>



        </div>

    )

}

export default Navbar