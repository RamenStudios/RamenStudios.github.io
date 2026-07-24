import App from "../App"
import { Spinner } from "./Spinner"

const VideosContent = () => {
    return (
        <div>
            <div class="container-lg">
                <Spinner/>
            </div>
            <h1>This is the videos page!</h1>
        </div>
    )
}

export const Videos = () => {
    return (
        <App content={VideosContent()}/>
    )
}