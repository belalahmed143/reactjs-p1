export function PropsCardx(props){
    return <div className="card">
        <h3>{props.pTitle}</h3>
        <p>{props.pPrice}</p>
        <p>{props.pCategory}</p>
    </div>
}