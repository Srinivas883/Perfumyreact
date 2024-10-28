import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

// Products
function Products(){
    return(<div className="products">
      <div className="box" >
        <img src={one} alt="one" />
        <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="box" >
        <img src={two} alt="two" />
        <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="box" >
        <img src={three} alt="three" />
        <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
      </div>
    </div>)
  }

  export default Products
  