import App from "../App"
import { ImgCard } from "../assets/ImgCard"
import { ImgCardList } from "../assets/ImgCardList"
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const Jerma = "https://media.tenor.com/GzegOh-0eR4AAAAe/sparkle-on-jerma.png"

const CardGen = (source, alt, caption) => {
    return  {
                source: source,
                alt: alt,
                caption: caption
            }
}

const PaneHelper = (content) => {
    return (
        <Tab.Pane eventKey={content.Key}>{content.Content}</Tab.Pane>   
    )
}

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
            <Tab.Container id="hometabs" defaultActiveKey="1">
                <div className="row mx-xl-3 mx-1 gy-0 my-0 tab-nav-pills">          
                    <Nav variant="pills">
                        <Nav.Item className="col-6 col-xl-2">
                            <Nav.Link className="tab-nav" eventKey="1">COMPSCI</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="col-6 col-xl-2">
                            <Nav.Link className="tab-nav right-pill" eventKey="2">STUDIO ART</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="row tab-row">
                    <Tab.Content>
                        {Cards.map((card) => (PaneHelper(card)))}
                    </Tab.Content>
                </div>
            </Tab.Container>
        </div>
    )
}