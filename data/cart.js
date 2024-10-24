export const cart = [{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 2
  },{
  productId: "b8a0f1c6-3b3d-4f4b-8e6c-4f7b4d3b5f6b",
    quantity: 1
}];

export function addToCart(productId){
  let matchingItem;  
  cart.forEach((cartItem)=>{
      if(productId===cartItem.productId){
          matchingItem=cartItem;
      }
    });
      if(matchingItem){
        matchingItem.Quantity+=1;
      }
      else{
        cart.push({
          productId: productId,
          Quantity: 1
        });
      }
}