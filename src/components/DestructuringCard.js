// destructuring mane hole kono kicuke vengge lekha

export function DestructuringCard(props){
    const  {title, price, category} = props;
    return <div className="card">
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{category}</p>
    </div>
}