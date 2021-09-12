/*
 The books array contain the list of books in the shopping cart.
 DO NOT EDIT THIS ARRAY
*/
window.books = [
  {
    title: "PROLOG Programming for Artificial Intelligence",
    authors: ["Ivan Bratko"],
    description:
      "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
    price: 89.29,
    rating: 4.5,
    quantity: 1,
  },
  {
    title: "Elements of the Theory of Computation",
    authors: ["Harry Lewis", "Christos H. Papadimitriou"],
    description:
      "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
    price: 182.65,
    rating: 4.7,
    quantity: 2,
  },
  {
    title: "The Silmarillion",
    authors: ["J.R.R. Tolkien"],
    description:
      "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
    price: 14.85,
    rating: 5,
    quantity: 1,
  },
  {
    title: "An Introduction to the Analysis of Algorithms",
    authors: ["Sedgewick Robert", "Flajolet Philippe"],
    description: "Methods and models for mathematically analyzing algorithms.",
    price: 51.19,
    rating: 4.2,
    quantity: 10,
  },
  {
    title: "The Art of Computer Programming, Volumes 1-4",
    authors: ["Donald E. Knuth"],
    description:
      "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
    price: 189.98,
    rating: 5,
    quantity: 2,
  },
];

///////////////////////////////
// WRITE YOUR SOLUTION BELOW //
///////////////////////////////

/*
 Create and return the HTML to render a single book.
 The `book` parameter is an object representing a single book. 
*/
function renderBook(book) {
  const { title, authors, description, price, rating, quantity } = book;
  const content = `
<div class="book">
<div class="details">
<div class="title">
${title}
<span class="rating">(${rating} stars)</span>
</div>
<div class="authors">by ${authors}</div>
<div class="description">${description}</div>
<button class="removeBtn">Remove from cart</button>
</div>
<div class="quantity">${quantity} @ $${price}</div>
<div class="price">$${quantity * price}</div>
</div>
`;
  return content;
}

/*
  Calculate and return the total price of all items in the cart.
 */
function calculateTotal() {
  const bookArray = window.books;
  let total = 0;
  for (let book of bookArray) {
    total += book.quantity * book.price;
  }
  return total;
}

/*
  Render the array of books and the cart total and insert them on the DOM.
  The books should be rendered in the `section` with id "cartItems".
  The total should be rendered in the `section` with id "cartTotal".
*/
function render() {
  const bookArray = window.books;
  // use querySelector to select id of cartItems
  const selectedBooks = document.querySelector("#cartItems");
  selectedBooks.innerHTML = "";
  // if the length of the array of books is not 0
  if (bookArray.length != 0) {
    // iterate through book array
    for (let book of bookArray) {
      // and render each book
      const renderedBook = renderBook(book);
      // adding the renderedBook to the innerHTML of selectedBooks
      selectedBooks.innerHTML += renderedBook;
    }
    // otherwise return "Nothing in cart"
  } else {
    selectedBooks.innerHTML = "Nothing in cart";
  }
  // set a constant equal to calculateTotal
  const total = calculateTotal();
  // set a constant to select the total price of items with an id of cartItems
  const cartItems = document.querySelector("#cartTotal .total-price");
  // calculate and display the total dollar amount for the items in the cart
  cartItems.innerText = `\$${total}`;
}

/*
  Sort the books array by price in ascending order then call render()
*/
const sortCart = (bookA, bookB) => {
  // create a constant represent the price of bookA
  const bookAPrice = bookA.price;
  // create a constant to represent the price of bookB
  const bookBPrice = bookB.price;
  // 
  return (bookAPrice - bookBPrice);
}

function sortByPrice() {
  window.books.sort(sortCart);

  render();
};
 

/*
  Perform all startup tasks here. Use this function to attach the required event listeners
  then call render()
*/
function main() {
  render();
  const sortButton = document.querySelector("#sortBtn");
  sortButton.addEventListener("click", sortByPrice);
}

window.addEventListener("DOMContentLoaded", main);

/////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////
window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;
