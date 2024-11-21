# Project name : Gadget Heaven

### Live Link: https://aquamarine-palmier-7c13d9.netlify.app/

### Private Github Repo Link : https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-dmmalek

### Requirement Document Link: https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf

# List of React Fundamental concepts used in the project:

### Components:

- Functional components for reusable UI elements.

### JSX:

- Syntax for embedding HTML in JavaScript.

### Props:

- Passing data between components.

### State Management:

- Managing component-specific data.

### Hooks:

- useState for state handling.
- useEffect for side effects.
- useLoader for handling data loading.
- useParams for accessing route parameters.
- useLocation for accessing current route information.
- useNavigation for managing navigation programmatically.

### Event Handling:

- Handling user interactions like onClick etc.

### Conditional Rendering:

- Dynamic UI rendering based on conditions.

### Lists and Keys:

- Rendering lists using map() function.
- Using key prop for efficient rendering.

### Routing:

- Navigation with react-router-dom.

### Styling:

- Tailwind CSS for utility-first CSS styling.
- DaisyUI for pre-designed Tailwind components.

# What you have used for handling and managing data (context API/local storage)

- LocalStorage

# 5 features of your website/project

### 1. Dynamic and Responsive Navigation System

A fully responsive Navbar with a Logo, Brand Name, and menu items like Dashboard and Stats.
Indicates the active route dynamically to enhance user experience.
The Navbar is persistently visible across all pages, including the Home, Dashboard, and Details pages.

### 2. Interactive and Functional Home Page

Features a banner section with a call-to-action button redirecting to the Dashboard page.
Includes a categories sidebar dynamically rendering categories like Computers, Phones, Smartwatches, etc., based on JSON data.
Displays gadgets in a card grid format, each showing product images, names, prices, and a "Details" button leading to the item's Details Page.

### 3. Detailed Product Information with Actionable Buttons

The Details Page showcases comprehensive product details, including name, price, specifications, rating, and availability.
Includes buttons for "Add to Cart" and "Add to Wishlist" with functionality:
Prevents adding the same item to the Wishlist more than once.
Displays toast notifications for both actions.

### 4. Comprehensive Dashboard with Sorting and Total Price

Contains two tabs: Cart and Wishlist, allowing users to manage their selections easily.
Features a "Sort by Price" option in the Cart tab for sorting items in descending price order.
Dynamically calculates and displays the total price of items in the Cart.

### 5. Enhanced User Experience with Additional Functionalities

Implements a Purchase Modal that appears upon clicking "Purchase," clearing the cart and redirecting to the Home page without reloading.
Includes a 404 page for undefined routes and a dynamic background color on the Home page using useLocation().
Dynamic page titles and a custom favicon improve usability and branding.
