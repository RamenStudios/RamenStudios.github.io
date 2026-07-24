export const ImgCard = ({source, alt, caption}) => {
    return (
        <div class="card text-bg-dark">
            <img src={source} class="card-img" alt={alt}/>
            <div class="card-img-overlay align-items-end">
                <div class="d-flex align-items-end mt-auto">
                    {caption}
                </div>
            </div>
        </div>
    )
}