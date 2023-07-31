import { impairmentData } from "./impairmentData";
import InfoCard from "./InfoCard"

function Content() {

    // const spotlight = document.querySelector("#spotlight");
    // const spotlight_child = document.querySelector("#spotlight-child");
    // const main = document.querySelector("main");
    // main.addEventListener("mousemove", moveSpotlight);
    // main.addEventListener("touchmove", moveSpotlight);
    // function moveSpotlight(e) {
    //   let pos, x, y;
    //   e.preventDefault();
    //   x = e.clientX - 300;
    //   y = e.clientY - 350;
    //   spotlight.style.left = x + "px";
    //   spotlight.style.top = y + "px";
    //   spotlight_child.style.left = x + "px";
    //   spotlight_child.style.top = y + "px";
    // }
    


    return (
        <div className="main" id="main">
            <div className="cursor-box" id="spotlight">
                <div className="content-container cursor-box-child" id="spotlight-child">
                    <div className="page-title">
                        <h2>Common Eye Disorders and Diseases</h2>
                    </div>
                    <>
                        { impairmentData.map(impairment =>
                        <div className="container">
                                <InfoCard dataObject={impairment} />
                        </div>
                        )}
                    </>
                </div>
            </div>
        </div>
    )
}

export default Content;