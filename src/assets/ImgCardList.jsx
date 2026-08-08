import { ImgCard } from './ImgCard'

const ImgCardColumn = (card) => {
    return(
        <div className="col-xl-3 col-6 red">
            {ImgCard({...card})}
        </div>
    )
}

export const ImgCardList = (cards) => {
    return (
        <div 
            className="row p-2 mb-5 mx-xl-3 mx-1 align-items-center justify-content-center border-5 red img-card-row"
            style={{minHeight:"20vh"}}
        >
            {cards.map((card) => (ImgCardColumn(card)))}
        </div>
    )
}