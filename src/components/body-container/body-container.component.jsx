import MainTopic from "../main-topic/main-topic.component";
import SideList from "../side-list/side-list.component";
import Directory from "../Directory/directory.component";

const BodyContainer = () => {
    const directoryContents = [
        {
            order: '01',
            title: 'Reviving Retro PCs',
            text: 'What happens when old PCs are given modern upgrades?',
            image: 'http://127.0.0.1:8887/image-retro-pcs.jpg',
            alt: 'Retro PCs'
        },
        {
            order: '02',
            title: 'Top Ten Laptops of 2022',
            text: 'Our best perks for various need and budgets.',
            image: 'http://127.0.0.1:8887/image-top-laptops.jpg',
            alt: 'Laptops'
        },
        {
            order: '03',
            title: 'The Growth of Gaming',
            text: 'How the pandemic has sparked fresh opportunities',
            image: 'http://127.0.0.1:8887/image-gaming-growth.jpg',
            alt: 'Gaming'
        }
    ]

    return (
        <div className="container-fluid mt-5 pt-5 px-0">
            <div className="row">
                <div className="col-lg-8 ">
                    <MainTopic />
                </div>
                <div className="col-lg-4">
                    <SideList />
                </div>
                <div className="row px-0">
                    <div className="col-lg pe-0">
                        <Directory content={directoryContents[0]} />
                    </div>
                    <div className="col-lg pe-0">
                        <Directory content={directoryContents[1]} />
                    </div>
                    <div className="col-lg pe-0">
                        <Directory content={directoryContents[2]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyContainer;