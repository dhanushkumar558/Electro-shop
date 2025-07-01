const products = [
  // Home Electronics
  {
    id: 'home-0',
    category: 'Home Electronics',
    name: '4K Smart LED TV',
    images: [
      'https://m.media-amazon.com/images/I/61DCk8NPiEL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/719AceN91hL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/61lVH1eW3-L._SX522_.jpg',
    ],
    price: '$499',
    description: 'Experience stunning 4K visuals with HDR support, smart streaming, and voice control.',
    
    rating: 4.5,
    reviews: [
      { name: "Ravi", time: "2 days ago", comment: "Amazing quality!" },
      { name: "Sneha", time: "1 week ago", comment: "Super vibrant colors." },
      { name: "Vikram", time: "3 days ago", comment: "Streaming is seamless." },
      { name: "Amit", time: "5 days ago", comment: "Voice assistant is helpful." },
      { name: "Neha", time: "6 days ago", comment: "Would buy again." },
    ],
  },
  {
    id: 'home-1',
    category: 'Home Electronics',
    name: 'Wireless Home Theater',
    images: [
      'https://m.media-amazon.com/images/I/51m4NsZau4L._SL1212_.jpg',
      'https://m.media-amazon.com/images/I/917r6VZzvgL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81qpgWe-TEL._SL1500_.jpg',
    ],
    price: '$329',
    description: 'Cinematic surround sound system with Bluetooth, Dolby support, and subwoofer.',
    rating: 4.2,
    reviews: [
      { name: "Kiran", time: "4 days ago", comment: "Bass is deep and punchy!" },
      { name: "Divya", time: "6 days ago", comment: "Bluetooth range is great." },
      { name: "Sahil", time: "1 week ago", comment: "Movies feel immersive." },
    ],
  },
  {
    id: 'home-2',
    category: 'Home Electronics',
    name: 'Smart Air Purifier',
    images: [
      'https://m.media-amazon.com/images/I/41IhOHEhVoL._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/61YN87R3ESL._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/61NibinwDpL._SX679_.jpg',
    ],
    price: '$199',
    description: 'Breathe clean air with this HEPA-filter purifier that connects to your smart home.',
    rating: 4.6,
    reviews: [
      { name: "Pooja", time: "2 days ago", comment: "Clean air in minutes!" },
      { name: "Nitin", time: "3 days ago", comment: "App control is great." },
      { name: "Raj", time: "5 days ago", comment: "Very effective for allergies." },
    ],
  },
  {
    id: 'home-3',
    category: 'Home Electronics',
    name: ' Air Purifier',
    images: [
      'https://m.media-amazon.com/images/I/71ipnrfS-1L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81XVz57qC+L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/814xOimYSLL._SL1500_.jpg',
    ],
    price: '$199',
    description: 'Breathe clean air with this HEPA-filter purifier that connects to your smart home.',
    rating: 4.6,
    reviews: [
      { name: "Pooja", time: "2 days ago", comment: "Clean air in minutes!" },
      { name: "Nitin", time: "3 days ago", comment: "App control is great." },
      { name: "Raj", time: "5 days ago", comment: "Very effective for allergies." },
    ],
  },
  {
    id: 'home-4',
    category: 'Home Electronics',
    name: 'Wipro Smart Plug',
    images: [
      'https://m.media-amazon.com/images/I/61GRHX4pTaL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61V-MmvlplL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71AzzRmo3LL._SL1500_.jpg',
    ],
    price: '$199',
    description: 'Breathe clean air with this HEPA-filter purifier that connects to your smart home.',
    rating: 4.6,
    reviews: [
      { name: "Pooja", time: "2 days ago", comment: "Clean air in minutes!" },
      { name: "Nitin", time: "3 days ago", comment: "App control is great." },
      { name: "Raj", time: "5 days ago", comment: "Very effective for allergies." },
    ],
  },


  // Kitchen Electronics
    {
    id: 'kitchen-0',
    category: 'Kitchen Electronics',
    name: 'Smart Blender Pro',
    images: [
      'https://m.media-amazon.com/images/I/61k6U7+8LwL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71WwXbgE7kL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61S2H0eT0UL._SL1500_.jpg'
    ],
    price: '$89',
    description: 'Blend smoothies and soups effortlessly with pre-programmed settings and stainless blades.',
    rating: 4.6,
    reviews: [
      { name: "Anjali", time: "2 days ago", comment: "Smoothies come out perfect every time!" },
      { name: "Rohit", time: "1 week ago", comment: "Very easy to clean and powerful motor." },
      { name: "Priya", time: "5 days ago", comment: "Build quality is top-notch." },
    ],
  },
  {
    id: 'kitchen-1',
    category: 'Kitchen Electronics',
    name: 'Touch Control Induction Cooktop',
    images: [
      'https://m.media-amazon.com/images/I/61lN2LjRMgL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71B2I6FhCbL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61vbi0cAXUL._SL1500_.jpg'
    ],
    price: '$119',
    description: 'Energy-efficient cooking with 8 power levels and a stylish glass panel.',
    rating: 4.3,
    reviews: [
      { name: "Deepika", time: "6 days ago", comment: "Very quick heating and modern design." },
      { name: "Harsh", time: "2 weeks ago", comment: "Touch panel is responsive." },
      { name: "Megha", time: "10 days ago", comment: "Good safety features." },
    ],
  },
  {
    id: 'kitchen-2',
    category: 'Kitchen Electronics',
    name: 'Automatic Electric Kettle',
    images: [
      'https://m.media-amazon.com/images/I/61nTspE5vTL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51z1vnQaFVL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61ozRgQ6sGL._SL1500_.jpg'
    ],
    price: '$45',
    description: 'Boil water in under 2 minutes with auto shutoff and boil-dry protection.',
    rating: 4.5,
    reviews: [
      { name: "Neha", time: "3 days ago", comment: "Instant water heating and auto-shutoff is great!" },
      { name: "Arjun", time: "1 week ago", comment: "Saves a lot of time in the kitchen." },
      { name: "Shruti", time: "8 days ago", comment: "Perfect for my hostel use." },
    ],
  },
  {
    id: 'kitchen-3',
    category: 'Kitchen Electronics',
    name: 'Multi-Function Rice Cooker',
    images: [
      'https://m.media-amazon.com/images/I/71TyZNp+8XL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81ZRo+M6E9L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71lGv5NdJQL._SL1500_.jpg'
    ],
    price: '$69',
    description: 'Cook rice, steam veggies, and prepare soups with one-touch operation.',
    rating: 4.4,
    reviews: [
      { name: "Karthik", time: "5 days ago", comment: "Truly multi-purpose!" },
      { name: "Shreya", time: "2 weeks ago", comment: "Super convenient for my kitchen." },
      { name: "Ravi", time: "1 week ago", comment: "Even cooks biryani well." },
    ],
  },
  {
    id: 'kitchen-4',
    category: 'Kitchen Electronics',
    name: 'Smart Microwave Oven',
    images: [
      'https://m.media-amazon.com/images/I/61pFS9S7U5L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61KnO3rVrJL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71MCmUnGfDL._SL1500_.jpg'
    ],
    price: '$149',
    description: 'Reheat, bake, and defrost with smart touch presets and voice assistant control.',
    rating: 4.5,
    reviews: [
      { name: "Ishita", time: "2 days ago", comment: "Perfect for baking and reheating." },
      { name: "Dev", time: "4 days ago", comment: "Connects with Alexa smoothly." },
      { name: "Rekha", time: "1 week ago", comment: "Design looks great too!" },
    ],
  },


// Gardening electronics
  {
    id: 'gardening-0',
    category: 'Gardening',
    name: 'Cordless Grass Trimmer',
    images: [
      'https://m.media-amazon.com/images/I/71nTTRqNdUL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81tCAmfMz1L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61Ay9vowS4L._SL1500_.jpg'
    ],
    price: '$89',
    description: 'Trim edges and weeds without cords — lightweight and powerful battery included.',
    rating: 4.4,
    reviews: [
      { name: "Anand", time: "4 days ago", comment: "Battery lasts surprisingly long." },
      { name: "Manju", time: "1 week ago", comment: "Cuts clean and handles well." },
      { name: "Shankar", time: "3 weeks ago", comment: "Easy to store and light." },
    ],
  },
  {
    id: 'gardening-1',
    category: 'Gardening',
    name: 'Smart Watering System',
    images: [
      'https://m.media-amazon.com/images/I/61fd6JojQ-L._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/71FOWqmwA3L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71PZLhvMcRL._SL1500_.jpg'
    ],
    price: '$129',
    description: 'Automated timer, rain sensor, and app-controlled watering system.',
    rating: 4.7,
    reviews: [
      { name: "Sneha", time: "2 days ago", comment: "My plants are always healthy now!" },
      { name: "Karthik", time: "1 week ago", comment: "Setup took 10 minutes. Works great." },
      { name: "Jaya", time: "5 days ago", comment: "No more overwatering issues." },
    ],
  },
  {
    id: 'gardening-2',
    category: 'Gardening',
    name: 'Ergonomic Gardening Tool Kit',
    images: [
      'https://m.media-amazon.com/images/I/71RXumjVuGL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81cRy5cDJML._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81kFnM8kbGL._SL1500_.jpg'
    ],
    price: '$39',
    description: 'Essential tools with anti-rust stainless steel and anti-slip grip.',
    rating: 4.2,
    reviews: [
      { name: "Raj", time: "1 week ago", comment: "All the tools are sharp and high quality." },
      { name: "Diya", time: "4 days ago", comment: "Cute and very useful for balcony gardening." },
      { name: "Gopal", time: "2 weeks ago", comment: "Better than I expected at this price." },
    ],
  },
  {
    id: 'gardening-3',
    category: 'Gardening',
    name: 'Electric Lawn Mower',
    images: [
      'https://m.media-amazon.com/images/I/61pEXkNS2jL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61NfOqq6Y3L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71t5B3q+jgL._SL1500_.jpg'
    ],
    price: '$189',
    description: 'Powerful electric mower with adjustable cutting height and large grass catcher.',
    rating: 4.6,
    reviews: [
      { name: "Ravi", time: "1 week ago", comment: "Makes mowing a breeze!" },
      { name: "Kavya", time: "3 days ago", comment: "Clean and even trimming every time." },
      { name: "Sandeep", time: "6 days ago", comment: "Assembly was simple." },
    ],
  },
  {
    id: 'gardening-4',
    category: 'Gardening',
    name: 'Vertical Wall Planter',
    images: [
      'https://m.media-amazon.com/images/I/81Z69zS4T9L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81RQksN1VjL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91rKnGkeDLL._SL1500_.jpg'
    ],
    price: '$29',
    description: 'Create a stunning vertical garden with durable hanging wall planters.',
    rating: 4.5,
    reviews: [
      { name: "Arun", time: "2 days ago", comment: "My balcony looks amazing!" },
      { name: "Lakshmi", time: "1 week ago", comment: "Sturdy material and great size." },
      { name: "Farhan", time: "4 days ago", comment: "Perfect for herbs and flowers." },
    ],
  },


//Personal Electronics
  {
    id: 'personal-0',
    category: 'Personal Care',
    name: 'Smart Hair Dryer',
    images: [
      'https://m.media-amazon.com/images/I/61qWJz2YvVL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61qLz0UjIPL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71n8KnFz5mL._SL1500_.jpg',
    ],
    price: '$59',
    description: 'Ionic drying with temperature control and foldable design.',
    rating: 4.1,
    reviews: [
      { name: "Sneha", time: "2 days ago", comment: "Dries my hair quickly without frizz!" },
      { name: "Aditi", time: "5 days ago", comment: "Compact and stylish!" },
      { name: "Meera", time: "1 week ago", comment: "Foldable design is great for travel." },
    ],
  },
  {
    id: 'personal-1',
    category: 'Personal Care',
    name: 'Electric Toothbrush',
    images: [
      'https://m.media-amazon.com/images/I/61gPCgVYe9L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61wtdvEGoBL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61VXWvGxlFL._SL1500_.jpg',
    ],
    price: '$39',
    description: 'Advanced sonic tech with 3 modes and long battery life.',
    rating: 4.6,
    reviews: [
      { name: "Kiran", time: "6 days ago", comment: "Teeth feel so much cleaner now." },
      { name: "Haritha", time: "1 week ago", comment: "Battery lasts for weeks!" },
      { name: "Shiva", time: "3 days ago", comment: "Feels premium in hand." },
    ],
  },
  {
    id: 'personal-2',
    category: 'Personal Care',
    name: 'Facial Steamer Pro',
    images: [
      'https://m.media-amazon.com/images/I/61bFZkfdpvL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61+IsJAmF5L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61E0qYuKbEL._SL1500_.jpg',
    ],
    price: '$79',
    description: 'Deep cleansing, hydration, and spa-like glow at home.',
    rating: 4.4,
    reviews: [
      { name: "Divya", time: "2 days ago", comment: "My skin feels amazing after using it!" },
      { name: "Riya", time: "1 week ago", comment: "Great for weekly pampering." },
      { name: "Lavanya", time: "3 days ago", comment: "Helps with my clogged pores." },
    ],
  },
  {
    id: 'personal-3',
    category: 'Personal Care',
    name: 'Rechargeable Beard Trimmer',
    images: [
      'https://m.media-amazon.com/images/I/61duF+2wU3L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61WJjtd-3pL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71h7ssBf52L._SL1500_.jpg',
    ],
    price: '$49',
    description: 'Precision trimming with long-lasting battery and multiple comb settings.',
    rating: 4.3,
    reviews: [
      { name: "Aman", time: "3 days ago", comment: "Very precise and easy to use." },
      { name: "Prateek", time: "1 week ago", comment: "Battery lasts long and charges fast." },
      { name: "Rahul", time: "5 days ago", comment: "Smooth trimming with no nicks." },
    ],
  },
  {
    id: 'personal-4',
    category: 'Personal Care',
    name: 'Heated Eye Massager',
    images: [
      'https://m.media-amazon.com/images/I/71I0rsb+vjL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61kS49EtzrL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71VJS7P0j7L._SL1500_.jpg',
    ],
    price: '$69',
    description: 'Relieve eye strain with heat and vibration massage — perfect after screen time.',
    rating: 4.5,
    reviews: [
      { name: "Megha", time: "2 days ago", comment: "Total relaxation after a long day!" },
      { name: "Nikhil", time: "4 days ago", comment: "Works well and very soothing." },
      { name: "Tarun", time: "6 days ago", comment: "Ideal for dry eyes and stress." },
    ],
  },


//automobile electronics 

  {
    id: 'automobiles-0',
    category: 'Automobiles',
    name: 'Car Dash Cam Pro',
    images: [
      'https://m.media-amazon.com/images/I/71R2Bl1JzGL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81DTY+4hzTL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81RCr+QoATL._SL1500_.jpg',
    ],
    price: '$149',
    description: 'Full HD recording with night vision and parking surveillance.',
    rating: 4.7,
    reviews: [
      { name: "Aravind", time: "2 weeks ago", comment: "Crystal-clear recording, even at night!" },
      { name: "Kavitha", time: "6 days ago", comment: "A must-have for every car!" },
      { name: "Naveen", time: "4 days ago", comment: "Parking mode saved me once!" },
    ],
  },
  {
    id: 'automobiles-1',
    category: 'Automobiles',
    name: 'Car Air Purifier Mini',
    images: [
      'https://m.media-amazon.com/images/I/61+GO4aO2uL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61L1JHV5b3L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61mg8u7mIjL._SL1500_.jpg',
    ],
    price: '$59',
    description: 'Removes allergens, smoke, and odors. USB powered.',
    rating: 4.3,
    reviews: [
      { name: "Ramesh", time: "3 days ago", comment: "Fresh air every time I drive!" },
      { name: "Pooja", time: "1 week ago", comment: "Works well during long drives." },
      { name: "Ashok", time: "5 days ago", comment: "Filters last long." },
    ],
  },
  {
    id: 'automobiles-2',
    category: 'Automobiles',
    name: 'Wireless Tire Inflator',
    images: [
      'https://m.media-amazon.com/images/I/7100sGFH77L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71qYybRbVxL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61HZy-3MPZL._SL1500_.jpg',
    ],
    price: '$79',
    description: 'Portable, rechargeable pump with auto stop and LED display.',
    rating: 4.5,
    reviews: [
      { name: "Sanjay", time: "2 weeks ago", comment: "Saved me during a highway trip!" },
      { name: "Bhavya", time: "1 week ago", comment: "Compact and powerful." },
      { name: "Vikram", time: "4 days ago", comment: "A must-have in every trunk." },
    ],
  },
  {
    id: 'automobiles-3',
    category: 'Automobiles',
    name: 'Car Vacuum Cleaner',
    images: [
      'https://m.media-amazon.com/images/I/61jBpZBzQ7L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71QL77+j6QL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61GPHLt2ThL._SL1500_.jpg',
    ],
    price: '$39',
    description: 'Powerful suction with multiple nozzles for a spotless interior.',
    rating: 4.2,
    reviews: [
      { name: "Ravi", time: "3 days ago", comment: "Very handy for quick cleaning!" },
      { name: "Sana", time: "1 week ago", comment: "Compact and powerful suction." },
      { name: "Mohan", time: "5 days ago", comment: "Perfect for small car spaces." },
    ],
  },
  {
    id: 'automobiles-4',
    category: 'Automobiles',
    name: 'Bluetooth FM Transmitter',
    images: [
      'https://m.media-amazon.com/images/I/61JH9xuA1uL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61Spz9MKJhL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61yVAE0gnIL._SL1500_.jpg',
    ],
    price: '$29',
    description: 'Stream music and take calls hands-free with FM transmission.',
    rating: 4.4,
    reviews: [
      { name: "Hari", time: "2 days ago", comment: "Great audio and easy pairing!" },
      { name: "Nikita", time: "4 days ago", comment: "FM is crystal clear." },
      { name: "Ashwin", time: "1 week ago", comment: "Makes my old car feel new." },
    ],
  },


  
];

export default products;
