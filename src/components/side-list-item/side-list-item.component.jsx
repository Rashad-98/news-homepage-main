import './side-list.styles.css';

const SideListItem = ({item}) => {
    return (
        <div>
            <h2 class='item-title'>
                {item.title}
            </h2>
            <p>
                {item.text}
            </p>
        </div>
    )
}

export default SideListItem;