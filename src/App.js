
import Navbar from "./components/Navbar"
import Search from "./components/Searchbar"
import Products from "./components/Products"
import Aboutus from "./components/Aboutus"
import Footers from "./components/Footer"


function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Products></Products>
            <Aboutus></Aboutus>
            <Footers></Footers>
        </div>
    )
}

export default App