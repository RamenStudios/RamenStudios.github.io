import App from "../App"
import { Spinner } from "./Spinner"

const PortfolioContent = () => {
    return (
        <div>
            <div class="container-lg">
                <Spinner/>
            </div>
            <h1>This is the portfolio page!</h1>
        </div>
    )
}

export const Portfolio = () => {
    return (
        <App content={PortfolioContent()}/>
    )
}