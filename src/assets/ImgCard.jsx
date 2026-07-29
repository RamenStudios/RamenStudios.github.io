export const ImgCard = ({source, alt, caption}) => {
    return (
        <div class="card text-bg-dark m-0 g-0 p-0 border-0 align-items-end">
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
            <div 
                class="card-img-overlay py-0 px-1"
                style={{
                    position:'absolute',
                    top: '103%'
                }}
            >
                <div 
                    class="d-flex align-items-end mt-0"
                    style={{
                        width:'1rem',
                        height: '1.2rem',
                        fontSize: '4rem',
                        textShadow: '0.2rem 0.2rem 1.25rem #000000'
                    }}
                >
                    {caption}
                </div>
            </div>
        </div>
    )
}