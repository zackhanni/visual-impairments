import { impairmentData } from "./impairmentData";
import InfoCard from "./InfoCard"

function Content() {

    return (

    <div className="content-container">
         <div className="title">
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

    )
}

export default Content;