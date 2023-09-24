import Header from "./components/Layout/Header";
import {  useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";
function App() {

 const [cartIsShown,setCartIsShown]=useState(false);

 const showCardHandler=()=>{
  setCartIsShown(true);
 }

 const hideCardHandler=()=>{
  setCartIsShown(false);

 }


  return (

    <CartProvider>
     {cartIsShown && <Cart onHideCart={hideCardHandler} />} 
      <Header onShowCart={showCardHandler} />
      <main>
     <Meals/>

      </main>
      </CartProvider>

  );
}

export default App;
