
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFile, FaDribbble } from "react-icons/fa"
import Link from "next/link"



const Footer = () => {

    return (

        <div className="footer">
            <div className="footer-container">
                <div className="left-side">
                    <h4>Rerouces to check out</h4>
                    <div className="resources">
                        <div className="resource-links">

                            <p>Resource 1</p>
                            <p>Resource 2</p>
                            <p>Resource 3</p>
                            <br/>
                            <p>Resource 4</p>
                            <p>Resource 5</p>

                        </div>
                    </div>
                </div>
                <div className="right-side">

                    <h4>About Me</h4>
                    <p>I enjoy coding, learning, and audio engineering. I am open href discussing new projects and design challenges.</p>
                    <div className="social">
                        <Link href="https://www.linkedin.com/in/zackhanni/" target="_blank"><FaLinkedin size={30} style={{color: "var(--sand)", marginRight: "1rem"}}/></Link>
                        <Link href="https://github.com/zackhanni" target="_blank"><FaGithub size={30} style={{color: "var(--sand)", marginRight: "1rem"}}/></Link>
                        <Link href="https://dribbble.com/zackhanni" target="_blank"><FaDribbble size={30} style={{color: "var(--sand)", marginRight: "1rem"}}/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;