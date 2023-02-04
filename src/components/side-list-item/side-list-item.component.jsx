import './side-list.styles.css';

const SideListItem = ({item}) => {
    return (
        <div className='item'>
            <a className='item-title-link' href=''>
                <h4 class='item-title'>
                    {item.title}
                </h4>
            </a>
            <p>
                {item.text}
            </p>
        </div>
    )
}

export default SideListItem;