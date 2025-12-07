import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

 
new Promise((resolve) => {
  console.log("Start Promise");
  loadProducts(() => {
    console.log("finished loading");
    resolve();
  });
}).then(() => {
  return new Promise((resolve) => {
   loadCart(() => {
    resolve();
   });
  });
 }).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
 });

/* Using Callbacks
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
