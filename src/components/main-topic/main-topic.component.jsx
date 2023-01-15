import './main-topic.styles.css'


const MainTopic = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src="http://127.0.0.1:8887/image-web-3-desktop.jpg" alt="lego"></img>
                </div>
            </div>
            <div className="row">
                <h1 className="col-lg-6 gy-4">
                    The Bright Future of Web 3.0?
                </h1>
                <div className="col-lg-6 gy-4">
                    <p>
                        We dive into the next evolution of the web that claims to puth the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <div className='row'>
                    <button id='rdButton'>
                        READ MORE
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTopic;