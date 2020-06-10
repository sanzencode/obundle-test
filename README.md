Store URL: https://pre-provisioned-w7cwqebsp1.mybigcommerce.com



* Refer to the BigCommerce developer documentation for any questions you might have. It will contain all the info needed to complete the tasks below

Task
1.	Create a product called Special Item which will be assigned to a new category called Special Items. Be sure to add at least 2 images during the product creation DONE
2.	Create a custom template for the Special Items category page. DONE
3.	The Special Item should be the only item which shows in this category - create a feature that will show the product's second image when it is hovered on. DONE
4.	Add a button at the top of the category page labeled Add All To Cart. When clicked, the product will be added to the cart. Notify the user that the product has been added. 
5.	If the cart has an item in it - show a button next to the Add All To Cart button which says Remove All Items. When clicked it should clear the cart and notify the user.
6.	Both buttons should utilize the Storefront API for completion.

* Bonus
If a customer is logged in - at the top of the category page show a banner that shows some customer details (i.e. name, email, phone ,etc). This should utilize the data that is rendered via Handlebars on the Customer Object.

---------------------------------------------------------

I gave it a good go! While not having been involved with Bigcommerce for a few years, it took a minute to get reacquainted. 

I was rather quick to get the CLI hooked up on my Windows machine and only needed to trouble shoot a few issues. I got everything working with the CLI and imported the cornerstone template and started to figure out what I needed to do. 

Task 1 was to create the Special Items category and the Special Item product along with 2 images. 

Task 2 was to create the custom folders and templates for the Special Items category page. Then to create a script to change the image to the second image when hovered over. 

Task 3 There are several ways to accomplish this. I was looking originally to use JS to change the src code for the image but was not sure how BC stores the images – I assumed an array and I needed to access the image in position 1 being the second image – [0], [1]. 
There is also a way to do this via scss which seemed a bit cleaner of a solution. I did reference somewhere in BC community using this technique to access the 2nd image position in the array as well. Changes made to the card.html and the card.scss are how those actions take place. Nothing happens if there are no other images in the array.

Task 4  Add a ADD ALL button on the top of the category page that would add all of the products to the cart at the same time. Like if a “bundle” product existed. What I wanted to do was to create a button that when clicked would trigger a function that would gather the product data that was on the page into and array and send “update cart” via the cart API. I am unfamiliar with how to integrate the API hook in this case. This code I placed into the custom.js file 

Task 5   This task is very similar to the last in that you want to clear the whole cart out via an obscure button. (testing shows sales decrease with clear cart buttons). I have a button placed in the cart and would like to again access the Cart API and add a “remove cart” method in the cart.js file. I added the function into custom.js but still am unsure how to wire it up so the event listener triggers. I can get simple triggers like alert to work and if I run examples per the BC docs into the terminal, they work. 

For now I tossed all of the code into the custom.js file in the repo to view. I think you could modify the Cart.js file with these methods. If the remove cart contents button would have worked for me I would also want to add in the pop up warning – since you can not get back a deleted cart!

AT THIS POINT - I would be reaching to my senior engineer to help direct me to how I need to get the wiring hooked up or send me to the docs or tutorial. 


