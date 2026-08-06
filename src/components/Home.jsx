import App from "../App"
import { ImgCard } from "../assets/ImgCard"
import { ImgCardList } from "../assets/ImgCardList"

const Jerma = "https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"

const CardGen = (source, alt, caption) => {
    return  {
                source: source,
                alt: alt,
                caption: caption
            }
}

const Cards =   [
                    [
                        CardGen(Jerma, 'jerma placeholder', 'WEBDEV'),
                        CardGen(Jerma, 'jerma placeholder', 'SOFTWARE'),
                        CardGen(Jerma, 'jerma placeholder', 'GAMEDEV'),
                        CardGen(Jerma, 'jerma placeholder', 'EMBEDDED'),
                    ],
                    [
                        CardGen(Jerma, 'jerma placeholder', 'COMICS'),
                        CardGen(Jerma, 'jerma placeholder', 'DRAWING'),
                        CardGen(Jerma, 'jerma placeholder', 'ANIMATION'),
                        CardGen(Jerma, 'jerma placeholder', 'DESIGN'),
                    ],
                ]

export const Home = () => {
    return (
        <div className="content-container container-fluid  justify-content-center">
            {Cards.map((card) => (ImgCardList(card)))}
        </div>
    )
}