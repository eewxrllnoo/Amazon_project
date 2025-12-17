import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";


async function loadPage() {
   

  await loadProductsFetch();
  const value = await new Promise((resolve) => {
   loadCart(() => {
    resolve('value5');
   });
  });

  
  renderOrderSummary();
  renderPaymentSummary();

  
}
loadPage();

/*
// Using Fetch and  Promises
Promise.all([
 loadProductsFetch(),
new Promise((resolve) => {
   loadCart(() => {
    resolve();
   });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
// Using Promises - Help keep our code flat
new Promise((resolve) => {
  console.log("Start Promise");
  loadProducts(() => {
    // console.log("finished loading");
    resolve('value1');
  });

}).then((value) => {
  console.log(value)
  return new Promise((resolve) => {
   loadCart(() => {
    resolve();
   });
  });
  
 }).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
 });
 */

/*
// Using Callbacks
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
