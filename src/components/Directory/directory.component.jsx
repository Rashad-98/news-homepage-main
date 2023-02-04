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
                            <h4 className='directory-item-order'>
                                {content.order}
                            </h4>
                        </div>
                        <div className="row">
                            <h6 className='directory-item-title'>
                                <a className='directory-item-title-link' href=''>
                                    {content.title}
                                </a>
                            </h6>
                        </div>
                        <div className="row">
                            <p className='directory-item-content'>
                                {content.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reviving Retro PCs */}
        </div>
    )
}

export default Directory;