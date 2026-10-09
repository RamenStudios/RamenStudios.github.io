export const ImgCard = ({source, alt, caption}) => {
    return (
        <div 
            class="imgcard card text-bg-dark my-3 g-0 p-0 border-0 align-items-end"
            style={{
                backgroundColor: "0x000000",
                aspectRatio: "3/4"
            }}
        >
            <img 
                src={source} 
                class="imgcard-img card-img" 
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
            <div 
                class="card-img-overlay py-0 px-1"
                style={{
                    position:'absolute',
                    top: '102%'
                }}
            >
                <div 
                    class="d-flex align-items-end mt-0 imgcard-text"
                >
                    {caption}
                </div>
            </div>
        </div>
    )
}