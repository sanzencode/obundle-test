import PageManager from "./page-manager";

export default class Custom extends PageManager {

    onReady() {

        //This method would be triggered by the Remove all button on the cart page
        //https://developer.bigcommerce.com/api-reference/cart-checkout/server-server-cart-api/cart/deleteacart
        function deleteCart({ cartId }) {
            this.$overlay.show();
            //call to API to access /carts/{cartId}
            utils.api.cart.cartDelete('/carts/{cartId}', (err, response) => {
                if (response.data.status === 'succeed') {
                    this.refreshContent(true);
                } else {
                    swal.fire({
                        text: response.data.errors.join('\n'),
                        icon: 'error',
                    });
                }
            });
        }
        //trigger the button
        const removeCart = document.querySelector('#removeAllProducts');
        removeCart.addEventListener('click', event => {
            deleteCart(arr, cartId)
        });

        function addBundleCart(productIds, cartId) {
            /* Sets the URL to an existing cart id + /items, if not use the cart endpoint to create a new cart */
            let url = cartId ?
                `/api/storefront/carts/${cartId}/items` :
                `/api/storefront/cart`
                /* Set a data variable to our lineItems object with the product ids mapped with a quantity of 1 */
            let data = {
                lineItems: productIds.map(id => ({
                    quantity: 1,
                    productId: id
                }))
            }
            console.log(url);
            let options = {
                    method: 'POST',
                    body: JSON.stringify(data),
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                /* Finally we fetch the cart URL with the generated URL and supplied options */
            return fetch(url, options)
                .then(res => res.json())
                .then(json => location.reload()); // Reloads the page

        }
        const bundleButton = document.querySelector('addBundlebtn');
        bundleButton.addEventListener('click', event => {
            addBundleCart(arr, cartId) // run the addMultiToCart function with the array we created and a cart ID if ones available in the context.
        });
    }
}