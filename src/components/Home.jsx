import App from "../App"
import { ImgCard } from "../assets/ImgCard"

export const Home = () => {
    return (
        <div className="container-lg justify-content-center">
            <div 
                className="row mb-4 align-items-center justify-content-center bg-danger border border-danger border-5"
                style={{minHeight:"20em"}}
            >
                <div className="col-lg-3 col-sm-6 border border-danger border-5">
                    <ImgCard 
                        source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} 
                        alt={"jerma placeholder"} 
                        caption={"WEBDEV"}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 border border-danger border-5">
                    <ImgCard 
                        source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} 
                        alt={"jerma placeholder"} 
                        caption={"SOFTWARE"}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 border border-danger border-5">
                    <ImgCard 
                        source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} 
                        alt={"jerma placeholder"} 
                        caption={"GAMEDEV"}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 border border-danger border-5">
                    <ImgCard 
                        source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} 
                        alt={"jerma placeholder"} 
                        caption={"EMBEDDED"}
                    />
                </div>
            </div>
            
            <div 
                className="row mb-3 align-items-center justify-content-center bg-danger border border-danger border-5"
                style={{minHeight:"20em"}}
            >
                <div className="col-lg-3 col-sm-6 border border-danger border-5">
                    <ImgCard 
                        source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} 
                        alt={"jerma placeholder"} 
                        caption={"COMICS"}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 border border-danger border-5">
                    <ImgCard 
                        source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} 
                        alt={"jerma placeholder"} 
                        caption={"ILLUSTRATION"}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 border border-danger border-5">
                    <ImgCard 
                        source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} 
                        alt={"jerma placeholder"} 
                        caption={"ANIMATION"}
                    />
                </div>
                <div className="col-lg-3 col-sm-6 border border-danger border-5">
                    <ImgCard 
                        source={"https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"} 
                        alt={"jerma placeholder"} 
                        caption={"DESIGN"}
                    />
                </div>
            </div>
        </div>
    )
}