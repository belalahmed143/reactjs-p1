const title = 'Product-1'
const price = 45
const category = 'T-Shirt'
const date = new Date()
const datename =date.getDate()
const monthname = date.getMonth()
const year = date.getFullYear()

export function ProductCard(){
    return <div className="card">
        <h3>{title}</h3>
        <p>BD {price}</p>
        <p>{category}</p>
        <p>{datename + "/" + monthname + "/" + year}</p>
    </div>
}