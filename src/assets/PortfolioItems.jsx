/*

PortfolioImageItem({content, caption, expanded})
    => The template for portfolio items that primarily showcase images
    => Structured as 
        <container>
            <content/>
            <caption (expandable accordion)>
                <further statement (expanded)>
            <caption/>
        </container>
        (if param 'expanded' === false, caption is not expandable)

PortfolioProjectItem
    => The template for portfolio items that route to a new page
    => Structured as 
        <container onClick={route to project page}>
            <PortfolioImageItem content={teaser image} caption={project title} expanded=false/>
        </container>
*/

export const PortfolioImageItem = ({content, caption, expanded}) => {
    return (
        <div 
            className="row p-2 mb-5 mx-xl-3 mx-1 align-items-center justify-content-center border-5 red img-card-row"
            style={{minHeight:"20vh"}}
        >
            {content}
            {caption}
        </div>
    )
}

export const PortfolioProjectItem = ({content, caption, route}) => {
    return (
        <a href={route}>
            <PortfolioImageItem content={content} caption={caption} expanded={false}/>
        </a>
    )
}