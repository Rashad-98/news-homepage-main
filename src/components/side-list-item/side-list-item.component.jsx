const SideListItem = ({item}) => {
    return (
        <div>
            <h2>
                {item.title}
            </h2>
            <p>
                {item.text}
            </p>
        </div>
    )
}

export default SideListItem;