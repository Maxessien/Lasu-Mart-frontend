# LASU Mart — Full Progress Tracker (Detailed)

---

## USER VIEWING PAGES

## 1. Landing / Home Page
**Overall:** ✅ Completed

### Header / Navigation
- ✅ Logo displayed properly
- ✅ Navigation links (Home, Shop, Categories, Cart, Login/Profile)
- ✅ Responsive mobile navigation / hamburger menu

### Hero Section
- ✅ Main hero banner
- ✅ Call-to-action button (Shop Now)
- ✅ Responsive scaling on mobile/tablet

### Featured Categories
- ✅ Category cards/tiles
- ✅ Click → category page
- ✅ Responsive grid layout

### Featured Products
- ✅ Product preview cards
- ✅ Add to cart button
- ✅ Price & name displayed
- ✅ Responsive product grid

### Search Bar
- ✅ Search input field
- ✅ Search button / icon
- ✅ Functional → redirects to search results page

### Promo Sections (Optional)
- ✅ Discount banners / seasonal promos
- ✅ Special offer highlights

### Footer
- ✅ Quick links
- ✅ Contact / social links
- ✅ Copyright

---

## 2. Product Listings Page
**Overall:** ✅ Completed

### Page Structure
- ✅ Top heading (All Products)
- ✅ Breadcrumbs (optional)

### Product Grid
- ✅ Product cards displayed in a grid
- ✅ Responsive grid layout
- ✅ Product image, name, price visible
- ✅ Add to cart button
- ✅ Clicking a product → single product page

### Filters
- ✅ Filter by category
- ✅ Filter by price range
- ✅ Filter by rating (optional)
- ✅ Filter by availability (optional)

### Sorting
- ✅ Sort by price (low → high)
- ✅ Sort by price (high → low)
- ✅ Sort by popularity
- ✅ Sort by newest

### Pagination / Load More
- ✅ Pagination or Load more implemented

### Empty State
- ✅ Message for when no products match

---

## 3. Single Product Page
**Overall:** ⚠️ Partially Done

### Product Display
- ✅ Large main product image
- ✅ Additional images / gallery
- ✅ Product title
- ✅ Product price
- ✅ Product description
- ❌ Stock status (In Stock / Out of Stock)

### Actions
- ❌ Quantity selector
- ✅ Add to cart button
- ❌ Add to wishlist button
- ❌ Buy now button (optional)
- ✅ Call vendor (custom button implemented)

### Product Details Section
- ❌ Specifications
- ❌ Features
- ❌ Shipping info
- ❌ Return policy info

### Reviews Section
- ❌ Show customer reviews
- ✅ Review rating stars
- ❌ Write a review form (optional)

### Related Products
- ❌ Related product carousel/grid
- ❌ Working links to other product pages

---

## 4. Categories Page
**Overall:** ❌ Not Started

### Category Display
- ❌ Grid/list of all categories
- ❌ Category image or icon
- ❌ Category title
- ❌ Category description (optional)
- ❌ Link to category-specific product listings

### Filtering
- ❌ Ability to filter by subcategory (if applicable)

### UI / Functionality
- ❌ Responsive layout
- ❌ Hover or tap animation (optional)
- ❌ Error handling if categories fail to load

---

## 5. Search Results Page
**Overall:** ❌ Not Started

### Search Input & Functionality
- ❌ Search input field visible
- ❌ Search button / icon functional
- ❌ Typing + hitting search returns results
- ❌ Handles no results found (empty state)

### Search Results Display
- ❌ List/grid of products matching search
- ❌ Product image, name, price visible
- ❌ Add to cart button on each result
- ❌ Clicking a product → single product page

### Filters & Sorting (Optional)
- ❌ Filter by category
- ❌ Filter by price
- ❌ Sort by price / popularity / newest

### UI / Responsiveness
- ❌ Responsive layout for mobile / tablet
- ❌ Error handling if search fails

---

## 6. Cart Page
**Overall:** ✅ Completed

### Cart Item List
- ✅ List of products added to cart
- ✅ Product image displayed
- ✅ Product name displayed
- ✅ Product price displayed
- ✅ Quantity selector per item
- ✅ Remove item button
- ✅ Update cart totals dynamically when quantity changes

### Cart Summary
- ✅ Subtotal calculation
- ✅ Tax / fees calculation (if applicable)
- ✅ Discount / promo code field
- ✅ Total price calculation
- ✅ Proceed to checkout button

### Empty Cart State
- ✅ Message / illustration when cart is empty
- ✅ Call-to-action to browse products

### Miscellaneous
- ✅ Responsive layout for mobile / tablet
- ✅ Persist cart state on page reload (localStorage/backend)

---

## 7. Checkout Page
**Overall:** ❌ Mostly Not Done

### User Information
- ✅ Display logged-in user’s name & email
- ❌ Shipping address input / selection
- ❌ Billing address input / selection (optional)
- ❌ Contact number input

### Order Summary
- ❌ List of products in the order
- ❌ Quantity and price per product
- ❌ Subtotal calculation
- ❌ Tax / fees calculation
- ❌ Discount / promo code logic
- ❌ Total price calculation

### Payment Section
- ❌ Payment method selection (card, wallet, etc.)
- ❌ Integrate payment gateway (Paystack/Flutterwave)
- ❌ Confirm payment button
- ❌ Display payment confirmation / success

### Miscellaneous
- ❌ Responsive layout for mobile / tablet
- ❌ Validate inputs before submission
- ❌ Error handling if payment fails

---

## 8. Order Confirmation Page
**Overall:** ❌ Not Started

### Confirmation Message
- ❌ “Thank you for your order” message
- ❌ Order number / ID displayed
- ❌ Estimated delivery date / time

### Order Summary
- ❌ List of ordered products
- ❌ Quantity and price per product
- ❌ Total amount paid

### Actions
- ❌ Button to return to shop / home page
- ❌ Button to view order history / details

### Miscellaneous
- ❌ Responsive layout
- ❌ Error handling if order data fails to load

---

## 9. Orders History Page
**Overall:** ⚠️ Partially Done

### Order List
- ✅ Display list of all past orders
- ✅ Show order ID / number
- ✅ Show order date
- ✅ Show order status (delivered, pending, cancelled)
- ✅ Show total amount per order

### Order Details
- ❌ Clicking an order → order details page
- ❌ List of products in that order
- ❌ Quantity & price per product
- ❌ Shipping address for the order
- ❌ Payment information

### Actions
- ❌ Button to reorder / buy again
- ❌ Button to track delivery (if applicable)

### UI / Miscellaneous
- ✅ Responsive layout for mobile / tablet
- ✅ Handle empty state (no orders yet)
- ✅ Error handling if orders fail to load

---

## 10. Profile Page
**Overall:** ⚠️ Partially Done (Address section missing)

### User Information
- ✅ Display user’s name
- ✅ Display user’s email
- ✅ Display user’s phone number
- ✅ Option to edit profile information

### Address Section
- ❌ Show saved address(es)
- ❌ Add new address
- ❌ Edit existing address
- ❌ Delete address

### Order History
- ✅ List user’s past orders
- ✅ Order details page link
- ✅ Show order status (delivered, pending, cancelled)

### Security / Account Settings
- ✅ Change password
- ✅ Logout button

### Miscellaneous
- ✅ Responsive layout
- ✅ Error handling if user data fails to load

---

## 11. Login Page
**Overall:** ✅ Completed

### Login Form
- ✅ Email / username input field
- ✅ Password input field
- ✅ Submit / login button
- ✅ Remember me checkbox (optional)
- ✅ Show / hide password toggle (optional)

### Authentication
- ✅ Validate email / password input
- ✅ Handle incorrect login credentials
- ✅ Integrate with backend authentication
- ✅ Redirect to home/dashboard on successful login

### Miscellaneous
- ✅ Forgot password link
- ✅ Responsive layout
- ✅ Error handling if backend fails

---

## 12. Register Page
**Overall:** ✅ Completed

### Registration Form
- ✅ Full name input field
- ✅ Email input field
- ✅ Password input field
- ✅ Confirm password input field
- ✅ Submit / register button

### Validation
- ✅ Validate required fields
- ✅ Validate email format
- ✅ Validate password strength
- ✅ Validate password & confirm password match

### Authentication
- ✅ Integrate with backend for account creation
- ✅ Handle duplicate email / account already exists

### Miscellaneous
- ✅ Redirect to login page on success
- ✅ Responsive layout
- ✅ Error handling if registration fails

---

## 13. Forgot Password Page
**Overall:** ⚠️ Partially Done

### Form
- ✅ Email input field
- ✅ Submit / Send Reset Link button

### Validation & Feedback
- ❌ Validate email input
- ❌ Show success message if email sent
- ❌ Show error message if email not found or request fails

### Miscellaneous
- ✅ Link to Login page
- ✅ Responsive layout for mobile / tablet
- ✅ Error handling if backend fails

---

## 14. Reset Password Page
**Overall:** ❌ Not Started

### Form
- ❌ New password input field
- ❌ Confirm new password input field
- ❌ Submit / Reset Password button

### Validation
- ❌ Validate required fields
- ❌ Validate password strength
- ❌ Validate password & confirm password match

### Backend Logic
- ❌ Validate password reset token (from email link)
- ❌ Update password in backend
- ❌ Handle expired or invalid reset token

### Miscellaneous
- ❌ Redirect to login page after successful reset
- ❌ Responsive layout
- ❌ Error handling if reset fails

---

## 15. Wishlist Page
**Overall:** ❌ Not Started

### Wishlist Display
- ❌ Show list of saved/wishlisted products
- ❌ Product image
- ❌ Product name
- ❌ Product price
- ❌ Stock status (optional)
- ❌ Link to view full product details

### Actions
- ❌ Remove item from wishlist
- ❌ Add item to cart
- ❌ Clear entire wishlist (optional)

### Logic
- ❌ Load wishlist items from backend/database
- ❌ Handle empty wishlist state
- ❌ Handle error if wishlist fails to load

### UI / Miscellaneous
- ❌ Responsive layout for mobile/tablet
- ❌ Smooth UI transitions/animations (optional)

---

## 16. Notifications Page
**Overall:** ❌ Not Started

### Notification List
- ❌ Display list of all notifications
- ❌ Notification title
- ❌ Notification message / description
- ❌ Timestamp
- ❌ Notification type (promo, order update, etc.)
- ❌ Unread vs read indicator

### Actions
- ❌ Mark individual notification as read
- ❌ Mark all notifications as read
- ❌ Delete a single notification
- ❌ Clear all notifications (optional)

### Logic
- ❌ Load notifications from backend/database
- ❌ Handle empty state
- ❌ Handle error if loading fails
- ❌ Real-time updates (optional)

### UI / Miscellaneous
- ❌ Responsive layout
- ❌ Smooth transitions/animations (optional)

---

## 17. FAQ / Help Center Page
**Overall:** ❌ Not Started

### FAQ Section
- ❌ List of frequently asked questions
- ❌ Expand/collapse (accordion) for each question
- ❌ Answer text for each FAQ
- ❌ Categories/sections (Orders, Payments, Delivery)
- ❌ Search bar to search FAQs (optional)

### Contact Options
- ❌ “Still need help?” CTA
- ❌ Link/button to Contact Support page
- ❌ Live chat option (optional)
- ❌ Call support option (optional)

### Logic
- ❌ Load FAQs from backend/JSON
- ❌ Handle empty FAQ state
- ❌ Handle error if FAQ fails to load
- ❌ Analytics tracking (optional)

### UI / Miscellaneous
- ❌ Responsive layout
- ❌ Smooth transitions for accordions
- ❌ Readable typography and spacing

---

## 18. Contact Support Page
**Overall:** ❌ Not Started

### Contact Form
- ❌ Name input field
- ❌ Email input field
- ❌ Subject input field
- ❌ Message / description textarea
- ❌ Submit button

### Contact Methods
- ❌ Phone number display / call button
- ❌ Email display / mailto link
- ❌ Live chat option (optional)
- ❌ Address / office location (optional)

### Logic
- ❌ Integrate form submission with backend
- ❌ Handle success confirmation
- ❌ Handle errors if submission fails
- ❌ Load contact info from backend (if dynamic)

### UI / Miscellaneous
- ❌ Responsive layout (mobile/tablet)
- ❌ Smooth transitions/animations
- ❌ Validation for required fields