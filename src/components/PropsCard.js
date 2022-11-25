export function PropsCard(props){
    return <div className="card">
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        <p>{props.category}</p>
    </div>
}