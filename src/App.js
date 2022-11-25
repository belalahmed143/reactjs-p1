import Nav from './components/Nav';
import './css_components/nav.css'
import Card from './components/Card';
import { ProductCard } from './components/ProductCard';
import { PropsCard } from './components/PropsCard';
import { PropsCardx } from './components/PropsCardx';
import { DestructuringCard } from './components/DestructuringCard';
import JsonData from './json/product.json'
import ClsCardProps from './components/class/ClsCardProps';
import CslDestructuringProps from './components/class/CslDestructuringProps';
import { FaOpencart } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";


function App() {
  // jsondata forloop
  let product = [] // key hisabe key={x} pass korle consol a ai error Warning: Each child in a list should have a unique "key" prop. ta dekhabe nag
  for(let x = 0; x < JsonData.length; x++){
    product.push(<PropsCard key={x} title={JsonData[x].title} price={JsonData[x].price}category={JsonData[x].category} />)
  }

  // json data map
  let items = [] // key hisabe key={index} pass korle consol a ai error Warning: Each child in a list should have a unique "key" prop. ta dekhabe nag
  items = JsonData.map((i, index) => <PropsCard key={index} title={i.title} price={i.price} category={i.category} />)
  return (
    <div>
    <Nav />

    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <h3>Product Card</h3><br />
    <ProductCard />
    <ProductCard />
    <ProductCard />

    <h3>Props Card</h3><br />
    <PropsCard title='Product-1' price='45' category='Ball' />
    <PropsCard title='Product-2' price='45' category='Ball' />
    <PropsCard title='Product-3' price='45' category='Ball' />

    <h3>Props Card with Destructuring</h3><br />
    <DestructuringCard title='Product-x' price='56' category='Shirt' />
    <DestructuringCard title='Product-y' price='57' category='Mobile' />
    <DestructuringCard title='Product-z' price='510' category='Shirt' />

    <h3>Product With props and Json Data</h3><br />
    <DestructuringCard title={JsonData[0].title} price={JsonData[0].price} category={JsonData[0].category} />
    <DestructuringCard title={JsonData[1].title} price={JsonData[1].price} category={JsonData[1].category} />
    <DestructuringCard title={JsonData[2].title} price={JsonData[2].price} category={JsonData[2].category} />
    
    <h3>Product with props , jsondata and forloop</h3><br />
    {product}

    <h3> Product with props, jsondata and map</h3><br />
    {items}

    <h3>Another System Product with props, jsondata and map</h3>
    {/* key hisabe key={index} pass korle consol a ai error Warning: Each child in a list should have a unique "key" prop. ta dekhabe nag */}
    {JsonData.map((x , index) =>  <PropsCardx key={index} pTitle={x.title} pPrice={x.price} pCategory={x.category}  />)}
    
    <h3>Start Class Component with props</h3>
    <ClsCardProps title="Hello Class Props" des='Thanks Props' />
    <ClsCardProps title="Hello Class Props" des='Thanks Props' />
    
    <h3>Class component with distructuring props</h3>
    <div>
    <CslDestructuringProps title='Destructuring Card' des='thanks destructuring' />
    <FaOpencart className='icon' />
    </div>
   
   <h3> React Icons</h3>
   <FaOpencart className='icon' />
   <BsFillCartCheckFill className='icon' />

   <h3>React Bootstrap</h3>

    </div>

  );
}

export default App;
