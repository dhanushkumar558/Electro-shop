const products = [
  // Home Electronics
  {
    id: 'home-0',
    category: 'Home Electronics',
    name: '4K Smart LED TV',
    images: [
      'https://images.unsplash.com/photo-1606813904192-63f6ad06ad89',
      'https://images.unsplash.com/photo-1607013251497-9b3bdb8b84a6',
      'https://images.unsplash.com/photo-1587049352844-4a614ef6f8aa',
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
      'https://images.unsplash.com/photo-1587574293340-bc70ccf378f4',
      'https://images.unsplash.com/photo-1513862341096-cff7d2d592b1',
      'https://images.unsplash.com/photo-1607083202827-2c5505c2d618',
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
      'https://images.unsplash.com/photo-1615880831849-d55da7e0b423',
      'https://images.unsplash.com/photo-1601121149260-1e42f5d62b3a',
      'https://images.unsplash.com/photo-1618220681803-1780620e1a4e',
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
    name: 'Smart Air Purifier',
    images: [
      'https://images.unsplash.com/photo-1615880831849-d55da7e0b423',
      'https://images.unsplash.com/photo-1601121149260-1e42f5d62b3a',
      'https://images.unsplash.com/photo-1618220681803-1780620e1a4e',
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
    name: 'Smart 10 Air Purifier',
    images: [
      'https://images.unsplash.com/photo-1615880831849-d55da7e0b423',
      'https://images.unsplash.com/photo-1601121149260-1e42f5d62b3a',
      'https://images.unsplash.com/photo-1618220681803-1780620e1a4e',
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
    id: 'home-5',
    category: 'Home Electronics',
    name: 'Smart 11 Air Purifier',
    images: [
      'https://images.unsplash.com/photo-1615880831849-d55da7e0b423',
      'https://images.unsplash.com/photo-1601121149260-1e42f5d62b3a',
      'https://images.unsplash.com/photo-1618220681803-1780620e1a4e',
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
    id: 'home-6',
    category: 'Home Electronics',
    name: 'Smart 12 Air Purifier',
    images: [
      'https://images.unsplash.com/photo-1615880831849-d55da7e0b423',
      'https://images.unsplash.com/photo-1601121149260-1e42f5d62b3a',
      'https://images.unsplash.com/photo-1618220681803-1780620e1a4e',
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
    'https://images.unsplash.com/photo-1586201375761-83865001e17b',
    'https://images.unsplash.com/photo-1571867424485-5313f6e95360',
    'https://images.unsplash.com/photo-1617113592165-d2f3d79ae39b'
  ],
  price: '$89',
  description: 'Blend smoothies and soups effortlessly with pre-programmed settings and stainless blades.',
  rating: 4.6,
  reviews: [
    { name: "Anjali", time: "2 days ago", comment: "Smoothies come out perfect every time!" },
    { name: "Rohit", time: "1 week ago", comment: "Very easy to clean and powerful motor." },
    { name: "Priya", time: "5 days ago", comment: "Build quality is top-notch." },
    { name: "Tanvi", time: "3 weeks ago", comment: "Perfect for daily use!" },
    { name: "Kunal", time: "1 month ago", comment: "Preset modes are a blessing." },
  ],
},
{
  id: 'kitchen-1',
  category: 'Kitchen Electronics',
  name: 'Touch Control Induction Cooktop',
  images: [
    'https://images.unsplash.com/photo-1601050690597-104e808f01f1',
    'https://images.unsplash.com/photo-1598986644722-2299c1d31e59',
    'https://images.unsplash.com/photo-1561137282-3e54524f3bb0'
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
    'https://images.unsplash.com/photo-1585832770088-4fa98a7e0fcb',
    'https://images.unsplash.com/photo-1586941319134-960d89cbee3c',
    'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642'
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
  id: 'gardening-0',
  category: 'Gardening',
  name: 'Cordless Grass Trimmer',
  images: [
    'https://images.unsplash.com/photo-1619122992128-b3f3a438c325',
    'https://images.unsplash.com/photo-1596457228534-b45c96f1fa7e',
    'https://images.unsplash.com/photo-1580894908364-4539e19dd216'
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
    'https://images.unsplash.com/photo-1614082242765-f0c0e2bb69b1',
    'https://images.unsplash.com/photo-1589638919144-b8a9f58797d2',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd'
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
    'https://images.unsplash.com/photo-1523393812869-62da4d57c4a1',
    'https://images.unsplash.com/photo-1598887142485-222e2c78f9e3',
    'https://images.unsplash.com/photo-1589578527966-2610f9bc6c7e'
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
  id: 'personal-0',
  category: 'Personal Care',
  name: 'Smart Hair Dryer',
  images: [
    'https://images.unsplash.com/photo-1618354691417-d640c14e74f4',
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e',
    'https://images.unsplash.com/photo-1618354786407-38db31ae5a3b',
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
    'https://images.unsplash.com/photo-1606760724930-868f74689b93',
    'https://images.unsplash.com/photo-1588776814546-a9d9e75c2377',
    'https://images.unsplash.com/photo-1601597111158-f23e67b6846d',
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
    'https://images.unsplash.com/photo-1588776814430-4c3d1a3e3c2a',
    'https://images.unsplash.com/photo-1571772631511-7e716bb91c6d',
    'https://images.unsplash.com/photo-1593716118964-5dcb9e64573d',
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
  id: 'automobiles-0',
  category: 'Automobiles',
  name: 'Car Dash Cam',
  images: [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
    'https://images.unsplash.com/photo-1570126684814-0d97a6220e6f',
    'https://images.unsplash.com/photo-1605918323541-bbde1ed6f5dc',
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
  name: 'Car Air Purifier',
  images: [
    'https://images.unsplash.com/photo-1551232864-3f2406e7e74d',
    'https://images.unsplash.com/photo-1609601847340-0b53b9aef993',
    'https://images.unsplash.com/photo-1613747493844-95a79c75fdf5',
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
    'https://images.unsplash.com/photo-1633432598659-c6b5e507a155',
    'https://images.unsplash.com/photo-1599488615734-f8084f11dcaa',
    'https://images.unsplash.com/photo-1612817156955-d3b898f93b67',
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

  // Add Gardening, Personal Care, Automobiles sections here similarly
];

export default products;
