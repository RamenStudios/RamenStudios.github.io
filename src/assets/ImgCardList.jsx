import { ImgCard } from './ImgCard'

const ImgCardColumn = (card) => {
    return(
        <div className="col-lg-3 col-6 border-5 red">
            {ImgCard({...card})}
        </div>
    )
}

export const ImgCardList = (cards) => {
    return (
        <div 
            className="row d-inline-flex p-2 mb-5 mx-lg-3 mx-1 align-items-center justify-content-center border-5 red"
            style={{minHeight:"20vh"}}
        >
            {cards.map((card) => (ImgCardColumn(card)))}
        </div>
    )
}