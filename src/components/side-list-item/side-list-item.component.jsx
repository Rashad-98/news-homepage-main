import './side-list.styles.css';

const SideListItem = ({item}) => {
    return (
        <div className='item'>
            <h4 class='item-title'>
                {item.title}
            </h4>
            <p>
                {item.text}
            </p>
        </div>
    )
}

export default SideListItem;