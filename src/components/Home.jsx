import App from "../App"
import { ImgCard } from "../assets/ImgCard"
import { ImgCardList } from "../assets/ImgCardList"
//import Tab from 'react-bootstrap/Tab';
//import Nav from 'react-bootstrap/Nav';

const Jerma = "https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"

const CardGen = (source, alt, caption) => {
    return  {
                source: source,
                alt: alt,
                caption: caption
            }
}

/*
const PaneHelper = (content) => {
    return (
        <Tab.Pane eventKey={content.Key}>{content.Content}</Tab.Pane>   
    )
}
*/

const Cards =   [
                    {
                        Key: '1',
                        Content: ImgCardList([
                            CardGen(Jerma, 'jerma placeholder', 'WEBDEV'),
                            CardGen(Jerma, 'jerma placeholder', 'SOFTWARE'),
                            CardGen(Jerma, 'jerma placeholder', 'GAMEDEV'),
                            CardGen(Jerma, 'jerma placeholder', 'EMBEDDED'),
                        ])
                    },
                    {
                        Key: '2',
                        Content: ImgCardList([
                            CardGen(Jerma, 'jerma placeholder', 'COMICS'),
                            CardGen(Jerma, 'jerma placeholder', 'DRAWING'),
                            CardGen(Jerma, 'jerma placeholder', 'ANIMATION'),
                            CardGen(Jerma, 'jerma placeholder', 'DESIGN'),
                        ])
                    },
                ]

export const Home = () => {
    return (
        <div className="content-container container-fluid  justify-content-center">
            {Cards.map((card) => (card.Content))}
        </div>
    )
}