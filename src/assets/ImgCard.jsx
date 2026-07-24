export const ImgCard = ({source, alt, caption}) => {
    return (
        <div class="card text-bg-dark m-0 g-0 p-0 border-0">
            <img 
                src={source} 
                class="card-img" 
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    opacity: '75%'
                }}
            />
            <div class="card-img-overlay align-items-end py-0 px-1">
                <div 
                    class="d-flex align-items-end mt-0"
                    style={{
                        width:'100%',
                        height: '120%',
                        fontSize: '5vw',
                        textShadow: '0 0 1vw #000000'
                    }}
                >
                    {caption}
                </div>
            </div>
        </div>
    )
}