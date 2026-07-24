import App from "../App"
import { ImgCard } from "../../public/ImgCard"
import { Spinner } from "./Spinner"

export const Home = () => {
    return (
        <div class="container-lg justify-content-center">
            <div 
            class="row mb-3 align-items-center justify-content-center bg-danger border border-danger border-5"
            style={{height:"20em"}}
            >
                <div class="col-3 border border-danger border-5">
                    <ImgCard source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} alt={"jerma placeholder"} caption={"COMICS"}/>
                </div>
                <div class=" col-3 border border-danger border-5">
                    <div class="p-3">ILLUSTRATION</div>
                </div>
                <div class=" col-3 border border-danger border-5">
                    <div class="p-3">ANIMATION</div>
                </div>
                <div class=" col-3 border border-danger border-5">
                    <div class="p-3">DESIGN</div>
                </div>
            </div>
            
            <div 
            class="row mb-3 align-items-center justify-content-center bg-danger border border-danger border-5"
            style={{height:"20em"}}
            >
                <div class="col-3 border border-danger border-5">
                    <div class="p-3">WEB-DEV</div>
                </div>
                <div class=" col-3 border border-danger border-5">
                    <div class="p-3">SOFTWARE</div>
                </div>
                <div class=" col-3 border border-danger border-5">
                    <div class="p-3">GAME DEV</div>
                </div>
                <div class=" col-3 border border-danger border-5">
                    <div class="p-3">EMBEDDED</div>
                </div>
            </div>
        </div>
    )
}