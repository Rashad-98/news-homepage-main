import SideListItem from "../side-list-item/side-list-item.component";
import './side-list.styles.css';

const SideList = () => {
    const content = [
        {
            id: 1,
            title: 'Hydrogen VS Electric Cars',
            text: 'Will hydrogyn-fueled cars ever catch up to EVs?'
        },
        {
            id: 2,
            title: 'The downsides of AI Artistry',
            text: 'What are the possible adverse effects of on-demand AI image generation?'
        },
        {
            id: 3,
            title: 'Is VC Funding Drying Up?',
            text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        }
    ]

    return (
        <div className='side-list-container'>
            <h1 id="side-list-title">New</h1>
            {content.map((item)=>{
                return (
                    <div>
                        <SideListItem key={item.id} item={item} />
                    <hr />
                    </div>
                )
            })}
        </div>
    )   
}

export default SideList;