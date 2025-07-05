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
    description: 'Breathe clean air with this purifier that connects to your smart home.',
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
    name: 'Hepa filter Air Purifier',
    images: [
      'https://m.media-amazon.com/images/I/71ipnrfS-1L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81XVz57qC+L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/814xOimYSLL._SL1500_.jpg',
    ],
    price: '$199',
    description: 'HEPA-filter purifier that coverts your toxic dust filled room into purified room.',
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
    description: 'Smart convinient Plug comfortable with large adapters',
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
      'https://m.media-amazon.com/images/I/71sQJltolRL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81OUrlgmLnL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81sTmre71mL._SL1500_.jpg'
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
      'https://m.media-amazon.com/images/I/51iI0N5UKfS._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/61psrtfhT+S._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/51INjX-LNrS._SL1000_.jpg'
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
      'https://m.media-amazon.com/images/I/61pTOr+MotL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/516aFO2YwmL._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/51qYatz6N1L._SX679_.jpg'
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
      'https://m.media-amazon.com/images/I/717S1k+3ulL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81gmlt2AHGL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/8132IHxFmDL._SL1500_.jpg'
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
      'https://m.media-amazon.com/images/I/71X4oAhYufL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71i+y28Vk3L._SX679_.jpg',
      'https://m.media-amazon.com/images/I/71cwnCfQq8L._SL1500_.jpg'
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
      'https://m.media-amazon.com/images/I/71Yh7d11P7L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/712Jw0uNyaL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81uX-88vSAL._SL1500_.jpg'
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
      'https://m.media-amazon.com/images/I/71WiglX8MyL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71pp-rXgGzL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81MD14TAyAL._SL1500_.jpg'
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
      'https://m.media-amazon.com/images/I/61AB4TvHDUS._SL1474_.jpg',
      'https://m.media-amazon.com/images/I/71XrsdjZscS._SL1001_.jpg',
      'https://m.media-amazon.com/images/I/618ydJmQtiS._SL1000_.jpg'
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
      'https://m.media-amazon.com/images/I/61omAwE3MvL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/815WpE0AwJL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71NtPzz-RyL._SL1500_.jpg'
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
      'https://m.media-amazon.com/images/I/71p-oHsm3GL._SL1280_.jpg',
      'https://m.media-amazon.com/images/I/71oe2AHq5cL._SL1280_.jpg',
      'https://m.media-amazon.com/images/I/718Zg+WxvlL._SL1280_.jpg'
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
      'https://m.media-amazon.com/images/I/81gVrVMBGVL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81UsH-bldlL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81NSr-WbTbL._SL1500_.jpg',
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
      'https://m.media-amazon.com/images/I/61S1WhZ5DrL._SL1300_.jpg',
      'https://m.media-amazon.com/images/I/61VG-T3QNrL._SL1300_.jpg',
      'https://m.media-amazon.com/images/I/61LcU9FapNL._SL1300_.jpg',
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
      'https://m.media-amazon.com/images/I/61SDLg0EOnL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71lLuDIbRSL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71spFushr+L._SL1500_.jpg',
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
      'https://m.media-amazon.com/images/I/61YNB13-F9L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71HRxBzyuQL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71w8O5JTOLL._SL1500_.jpg',
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
      'https://m.media-amazon.com/images/I/31fQQViJz4L.jpg',
      'https://m.media-amazon.com/images/I/61F-Qb8dW2L._SL1080_.jpg',
      'https://m.media-amazon.com/images/I/61uoNhBpI7L._SL1080_.jpg',
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
      'https://m.media-amazon.com/images/I/61C+m93WT4L._SL1080_.jpg',
      'https://m.media-amazon.com/images/I/61AmqhCS60L._SL1080_.jpg',
      'https://m.media-amazon.com/images/I/61TlFSpyIfL._SL1080_.jpg',
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
      'https://m.media-amazon.com/images/I/61jwM+adjXL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61rIPbMFznL._SL1080_.jpg',
      'https://m.media-amazon.com/images/I/71udIIRFOKL._SL1500_.jpg',
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
      'https://m.media-amazon.com/images/I/71E3TcdD5PL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81eR7kfVZSL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71z9+QxGvtL._SL1500_.jpg',
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
      'https://m.media-amazon.com/images/I/71pmwfKdhDL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71NW6B-UFJL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71w5hhX+4PL._SL1500_.jpg',
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
      'https://m.media-amazon.com/images/I/61WgfdZIhIS._SL1200_.jpg',
      'https://m.media-amazon.com/images/I/71BE6q6AkLS._SL1200_.jpg',
      'https://m.media-amazon.com/images/I/61cnnFc223S._SL1200_.jpg',
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
