import Products from "../copmponents/Products/Products";
import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async ()=> {
    const loadedProducts = await fetch ('products.json');
    const products = await loadedProducts.json();
      

    const storedProduct = getShoppingCart();
    const savedProduct = [];
    console.log(storedProduct)
    for(const id in storedProduct){
        const addedProduct = products.find(pd => pd.id ===id);
        if(addedProduct){
            const quantity = storedProduct[id];
            addedProduct.quantity=quantity;
            savedProduct.push(addedProduct);
        }
    }

    return savedProduct;
}


export default CartProductsLoader