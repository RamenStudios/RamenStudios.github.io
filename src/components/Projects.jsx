import App from "../App"
import { Spinner } from "./Spinner"

const ProjectsContent = () => {
    return (
        <div>
            <div class="container-lg">
                <Spinner/>
            </div>
            <h1>This is the projects page!</h1>
        </div>
    )
}

export const Projects = () => {
    return (
        <App content={ProjectsContent()}/>
    )
}