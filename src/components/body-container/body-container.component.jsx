import MainTopic from "../main-topic/main-topic.component";
import SideList from "../side-list/side-list.component";

const BodyContainer = () => {
    return (
        <div className="container-fluid mt-5 pt-5">
            <div className="row">
                <div className="col-lg-8 ">
                    <MainTopic />
                </div>
                <div className="col-lg-4">
                    <SideList />
                </div>
                <div className="row">
                    <div className="col-lg">
                        Reviving Retro PCs
                    </div>
                    <div className="col-lg">
                        Top 10 Laptops of 2020
                    </div>
                    <div className="col-lg">
                        The Growth of Gaming
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyContainer;