import App from "../App"
import { Spinner } from "./Spinner"

const AboutContent = () => {
    return (
        <div>
            <div class="container-lg">
                <Spinner/>
            </div>
            <h1>WHO OR WHAT IS RAMENSTUDIOS?</h1>
            <div class="row">
                <div class="col-6 justify-content-start">
                    image of the guy
                </div>
                <div class="col-6 justify-content-start text-start">
                    <small><i>
                        Mysterious creatures going bump in the night, the hair on the back of your neck standing stiff. 
                        The sight of red eyes and wings from the periphery, the beat and drum as air moves around you...
                    </i></small><br/>
                    <b>RAMENSTUDIOS</b> is a long-term, multi-focus project run by the guy in figure 1.
                    <br/>
                    Over the years, the studio has evolved from a place to show art and sell cheap commissions to a deep and rich repository of
                     knowledge, creativity, and critical amounts of ambition. <b>RAMEN</b> has dabbled in everything from game development to graphic 
                     design, webdev and animation, and more!
                    <br/>
                    <b>RAMEN</b> graduated as a Reilly Scholar from the University of Notre Dame in 2025, emerging with a BS in Computer Science and 
                    a BA in Studio Art. Ask about the intersection between the two if you have a few free hours! Or, go to PROJECTS to read 
                    more about the invaluable experiences gained over those five years and beyond.
                </div>
            </div>
        </div>
    )
}

export const About = () => {
    return (
        <App content={AboutContent()}/>
    )
}