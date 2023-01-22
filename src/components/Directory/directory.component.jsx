import './directory.styles.css'

function Directory({content}) {
    return(
        <div className="col-lg">
            <div className="container-fluid directory-item">
                <div className="row">
                    <div className="col-4">
                            <img src={content.image} alt={content.alt} />
                    </div>
                    <div className="col-8 container-fluid">
                        <div className="row">
                            {content.order}
                        </div>
                        <div className="row">
                            {content.title}
                        </div>
                        <div className="row">
                            {content.text}
                        </div>
                    </div>
                </div>
            </div>
            {/* Reviving Retro PCs */}
        </div>
    )
}

export default Directory;