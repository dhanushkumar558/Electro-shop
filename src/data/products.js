const products = [
  // Cakes
  {
    id: 'Cakes0',
    category: 'Cakes',
    name: 'Chocolate Fudge Cake',
    images: [
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$29.99',
    description: 'Rich chocolate cake with fudge filling and chocolate ganache topping, perfect for celebrations.',
    rating: 4.8,
    reviews: [
      { name: "Ravi", time: "2 days ago", comment: "Absolutely decadent!" },
      { name: "Sneha", time: "1 week ago", comment: "Best chocolate cake I've ever had." },
      { name: "Vikram", time: "3 days ago", comment: "Moist and perfectly sweet." },
    ],
  },
  {
    id: 'Cakes1',
    category: 'Cakes',
    name: 'Red Velvet Cake',
    images: [
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
    ],
    price: '$34.99',
    description: 'Classic red velvet with cream cheese frosting, a timeless favorite for all occasions.',
    rating: 4.7,
    reviews: [
      { name: "Kiran", time: "4 days ago", comment: "The cream cheese frosting is divine!" },
      { name: "Divya", time: "6 days ago", comment: "Perfect balance of flavors." },
    ],
  },
  {
    id: 'Cakes2',
    category: 'Cakes',
    name: 'Vanilla Bean Cake',
    images: [
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
    ],
    price: '$27.99',
    description: 'Pure vanilla bean cake with buttercream frosting, simple yet elegant.',
    rating: 4.6,
    reviews: [
      { name: "Pooja", time: "2 days ago", comment: "The vanilla flavor is so authentic!" },
      { name: "Nitin", time: "3 days ago", comment: "Light and fluffy texture." },
    ],
  },
  {
    id: 'Cakes3',
    category: 'Cakes',
    name: 'Carrot Cake',
    images: [
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
    ],
    price: '$32.99',
    description: 'Moist carrot cake with walnuts, raisins, and cream cheese frosting.',
    rating: 4.7,
    reviews: [
      { name: "Raj", time: "5 days ago", comment: "The perfect amount of spice!" },
      { name: "Neha", time: "6 days ago", comment: "Would buy again and again." },
    ],
  },
  {
    id: 'Cakes4',
    category: 'Cakes',
    name: 'Lemon Drizzle Cake',
    images: [
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
    ],
    price: '$24.99',
    description: 'Zesty lemon cake with sweet drizzle icing, a refreshing treat.',
    rating: 4.5,
    reviews: [
      { name: "Amit", time: "3 days ago", comment: "Perfect balance of sweet and tart." },
      { name: "Priya", time: "1 week ago", comment: "So moist and flavorful!" },
    ],
  },

  // Pastries
  {
    id: 'Pastries0',
    category: 'Pastries',
    name: 'Croissants (6 Pack)',
    images: [
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
    ],
    price: '$12.99',
    description: 'Buttery, flaky French croissants, perfect with coffee or tea.',
    rating: 4.6,
    reviews: [
      { name: "Anjali", time: "2 days ago", comment: "Authentic French taste!" },
      { name: "Rohit", time: "1 week ago", comment: "Perfectly flaky layers." },
    ],
  },
  {
    id: 'Pastries1',
    category: 'Pastries',
    name: 'Macarons (12 Pack)',
    images: [
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$18.99',
    description: 'Delicate French macarons in assorted flavors with ganache filling.',
    rating: 4.8,
    reviews: [
      { name: "Deepika", time: "6 days ago", comment: "Beautiful colors and flavors!" },
      { name: "Harsh", time: "2 weeks ago", comment: "Worth every penny." },
    ],
  },
  {
    id: 'Pastries2',
    category: 'Pastries',
    name: 'Chocolate Éclairs',
    images: [
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$14.99',
    description: 'Classic éclairs filled with vanilla cream and topped with chocolate glaze.',
    rating: 4.7,
    reviews: [
      { name: "Neha", time: "3 days ago", comment: "Cream filling is heavenly!" },
      { name: "Arjun", time: "1 week ago", comment: "Perfect pastry texture." },
    ],
  },
  {
    id: 'Pastries3',
    category: 'Pastries',
    name: 'Fruit Tart',
    images: [
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
    ],
    price: '$16.99',
    description: 'Buttery tart shell with pastry cream and fresh seasonal fruits.',
    rating: 4.6,
    reviews: [
      { name: "Karthik", time: "5 days ago", comment: "Beautiful presentation!" },
      { name: "Shreya", time: "2 weeks ago", comment: "Fresh and delicious." },
    ],
  },
  {
    id: 'Pastries4',
    category: 'Pastries',
    name: 'Tiramisu',
    images: [
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
    ],
    price: '$22.99',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    rating: 4.9,
    reviews: [
      { name: "Ishita", time: "2 days ago", comment: "Authentic Italian taste!" },
      { name: "Dev", time: "4 days ago", comment: "Perfect balance of coffee flavor." },
    ],
  },

  // Breads
  {
    id: 'Breads0',
    category: 'Breads',
    name: 'Sourdough Loaf',
    images: [
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
    ],
    price: '$8.99',
    description: 'Artisan sourdough with perfect crust and tangy flavor.',
    rating: 4.5,
    reviews: [
      { name: "Anand", time: "4 days ago", comment: "Perfect crust and chew!" },
      { name: "Manju", time: "1 week ago", comment: "Great for sandwiches." },
    ],
  },
  {
    id: 'Breads1',
    category: 'Breads',
    name: 'Baguette',
    images: [
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
    ],
    price: '$6.99',
    description: 'Traditional French baguette with crisp crust and airy interior.',
    rating: 4.4,
    reviews: [
      { name: "Sneha", time: "2 days ago", comment: "Authentic French taste!" },
      { name: "Karthik", time: "1 week ago", comment: "Perfect for bruschetta." },
    ],
  },
  {
    id: 'Breads2',
    category: 'Breads',
    name: 'Cinnamon Raisin Bread',
    images: [
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$9.99',
    description: 'Sweet bread with cinnamon swirls and plump raisins.',
    rating: 4.7,
    reviews: [
      { name: "Raj", time: "1 week ago", comment: "Perfect for French toast!" },
      { name: "Diya", time: "4 days ago", comment: "Love the cinnamon flavor." },
    ],
  },
  {
    id: 'Breads3',
    category: 'Breads',
    name: 'Whole Wheat Bread',
    images: [
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$7.99',
    description: 'Healthy whole wheat bread with hearty texture and nutty flavor.',
    rating: 4.3,
    reviews: [
      { name: "Ravi", time: "1 week ago", comment: "Great for healthy sandwiches." },
      { name: "Kavya", time: "3 days ago", comment: "Perfect texture." },
    ],
  },
  {
    id: 'Breads4',
    category: 'Breads',
    name: 'Brioche Loaf',
    images: [
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$10.99',
    description: 'Rich, buttery brioche perfect for French toast or indulgent sandwiches.',
    rating: 4.6,
    reviews: [
      { name: "Arun", time: "2 days ago", comment: "Incredibly soft and rich!" },
      { name: "Lakshmi", time: "1 week ago", comment: "Worth every calorie." },
    ],
  },

  // Cookies
  {
    id: 'Cookies0',
    category: 'Cookies',
    name: 'Chocolate Chip Cookies (12)',
    images: [
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
    ],
    price: '$11.99',
    description: 'Classic cookies with melty chocolate chips and crisp edges.',
    rating: 4.8,
    reviews: [
      { name: "Sneha", time: "2 days ago", comment: "Perfectly chewy and chocolatey!" },
      { name: "Aditi", time: "5 days ago", comment: "Best cookies I've had." },
    ],
  },
  {
    id: 'Cookies1',
    category: 'Cookies',
    name: 'Oatmeal Raisin Cookies (12)',
    images: [
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$10.99',
    description: 'Hearty oatmeal cookies with plump raisins and cinnamon spice.',
    rating: 4.5,
    reviews: [
      { name: "Kiran", time: "6 days ago", comment: "Just like grandma used to make!" },
      { name: "Haritha", time: "1 week ago", comment: "Perfect breakfast cookie." },
    ],
  },
  {
    id: 'Cookies2',
    category: 'Cookies',
    name: 'Shortbread Cookies (12)',
    images: [
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$12.99',
    description: 'Buttery Scottish shortbread with delicate crumb and pure flavor.',
    rating: 4.7,
    reviews: [
      { name: "Divya", time: "2 days ago", comment: "Melt-in-your-mouth goodness!" },
      { name: "Riya", time: "1 week ago", comment: "Perfect with tea." },
    ],
  },
  {
    id: 'Cookies3',
    category: 'Cookies',
    name: 'Macarons (6 Pack)',
    images: [
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$14.99',
    description: 'Delicate French macarons in assorted colors and flavors.',
    rating: 4.9,
    reviews: [
      { name: "Aman", time: "3 days ago", comment: "Beautiful and delicious!" },
      { name: "Prateek", time: "1 week ago", comment: "Worth the splurge." },
    ],
  },
  {
    id: 'Cookies4',
    category: 'Cookies',
    name: 'Double Chocolate Cookies (12)',
    images: [
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
    ],
    price: '$13.99',
    description: 'Rich cocoa cookies with white and dark chocolate chunks.',
    rating: 4.8,
    reviews: [
      { name: "Megha", time: "2 days ago", comment: "Chocolate lover's dream!" },
      { name: "Nikhil", time: "4 days ago", comment: "Perfectly fudgy texture." },
    ],
  },

  // Special Occasion
  {
    id: 'Special_Occasion-0',
    category: 'Special Occasion',
    name: 'Wedding Cake (3-Tier)',
    images: [
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
    ],
    price: '$299.99',
    description: 'Elegant 3-tier wedding cake with buttercream frosting and floral decorations.',
    rating: 4.9,
    reviews: [
      { name: "Aravind", time: "2 weeks ago", comment: "Stunning centerpiece for our wedding!" },
      { name: "Kavitha", time: "6 days ago", comment: "Tasted as beautiful as it looked." },
    ],
  },
  {
    id: 'Special_Occasion-1',
    category: 'Special Occasion',
    name: 'Birthday Cake (Custom)',
    images: [
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$49.99',
    description: 'Customizable birthday cake with choice of flavors, fillings, and decorations.',
    rating: 4.8,
    reviews: [
      { name: "Ramesh", time: "3 days ago", comment: "Made my daughter's birthday special!" },
      { name: "Pooja", time: "1 week ago", comment: "Beautiful custom design." },
    ],
  },
  {
    id: 'Special_Occasion-2',
    category: 'Special Occasion',
    name: 'Cupcake Tower (24)',
    images: [
      'https://m.media-amazon.com/images/I/81F+vXyR0IL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$59.99',
    description: 'Elegant display of assorted cupcakes perfect for parties and events.',
    rating: 4.7,
    reviews: [
      { name: "Sanjay", time: "2 weeks ago", comment: "Big hit at our office party!" },
      { name: "Bhavya", time: "1 week ago", comment: "Beautiful presentation." },
    ],
  },
  {
    id: 'Special_Occasion-3',
    category: 'Special Occasion',
    name: 'Anniversary Cake',
    images: [
      'https://m.media-amazon.com/images/I/81VJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81vJQOZ4XBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
    ],
    price: '$69.99',
    description: 'Elegant two-tier cake with romantic decorations, perfect for anniversaries.',
    rating: 4.8,
    reviews: [
      { name: "Ravi", time: "3 days ago", comment: "Made our 25th anniversary special!" },
      { name: "Sana", time: "1 week ago", comment: "Beautiful and delicious." },
    ],
  },
  {
    id: 'Special_Occasion-4',
    category: 'Special Occasion',
    name: 'Baby Shower Cake',
    images: [
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r1X+N4P4L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+6X8Pj+ZL._SL1500_.jpg',
    ],
    price: '$54.99',
    description: 'Adorable themed cake perfect for baby showers and christenings.',
    rating: 4.7,
    reviews: [
      { name: "Hari", time: "2 days ago", comment: "Absolutely precious design!" },
      { name: "Nikita", time: "4 days ago", comment: "Tasted as good as it looked." },
    ],
  },
];

export default products;