const products = [
  // Cakes
  {
    id: 'Cakes0',
    category: 'Cakes',
    name: 'Chocolate Fudge Cake',
    images: [
      'https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/chocolate_fudge_cake_54366_16x9.jpg.webp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMF89RKIywPmyHzrwe3ljQhHziJqQG0WfW_A&s',
      
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4Hvl8d35oyS_dk5nOWEYNXtwIpGhMrO0JA&s',
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
      'https://cruff.in/cdn/shop/files/hearty-red-velvet-cake.webp?v=1731494478',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpys8z2QCAJ3mnYPFWnOxHx3wjShS9jt8jQ&s',
      'https://www.elloras.in/cdn/shop/products/04RedVelveteCheeseCake.jpg?v=1660808024',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3Yqgto1n9aGcjG61FheoW3RDiZF5_pwv4g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPC43vsuJQQkdBtT4RVGF6GehCYnY3VIhvA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpyhOpw5Rn2dkImyg8vNoUlxK4op7dm_FCA&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTQcwlr75jWHyVqOgPFVPVOT3fqSXdt6g_g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GkfF9zCukVIsX5gBhFQZhue271HBdmX7IQ&s',
      'https://www.glorioustreats.com/wp-content/uploads/2014/05/best-carrot-cake-recipe-square.jpeg',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8bmnueBVqN_4Y0uDtY28b_0Q4v5H8IVz1A&s',
      'https://www.cookingwithmykids.co.uk/wp-content/uploads/2019/12/lemon-drizzle-cake39-scaled.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUn7EEn7QucKsi2nszR3I78HtIU3lPAWqSA&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJB0CmYh7LPhTBKOrL-PDhWSPCs0__Mse1Ig&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLFvmnDWmc1ONcazW7boDH9hrcHJyPJKOBg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Z58njcB5mpHG9YoozKM1GvAgQTxKh9Ex5A&s',
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
      'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/183721/LaFournette-Chicago-12.jpg?ixlib=react-9.10.0&ar=1%3A1&fit=crop&w=3840&auto=format',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWg_8aiDR2BBkjKU5a_CACBOWNhiVXWUV0w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXko-eb9bX0P6VsciqEn4CCaSqucllcOU8w&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0xb-0Ms_nAtsLbUxI4tQ_T7jhYHwUg2sqw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXt_Qp2yBHT0E_8b7_NehUP6KqltqTnnLK3w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFCpwCQGNLu4qpF4a3QFiHjMlZCSmGCczMQ&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzzNyoizPRP2l260HBMRKahm53_w1iq57fw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsL6BvkBOQLODDFVn_n6Fhh2n3IpIdtxS8AA&s',
      'https://res.cloudinary.com/hksqkdlah/image/upload/35476_sfs-fresh-fruit-tart-44.jpg',
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
      'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2024/09/THUMB-VIDEO-2_rev1-56.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYEJ7Wl7bG8P535PfYj7UDdn3vBpF7ECCzw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkhk7WcI0AOhPoDhFauI7S4741kg1sAUNSw&s',
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
      'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/57618e37-2445-4835-b872-5af36ac5dcb0/Derivates/588f2b19-6a23-4643-a59e-8335def06f79.jpg',
      'https://littlespoonfarm.com/wp-content/uploads/2020/01/Sourdough-Bread-Recipe-for-Beginners.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQ7I4PVhUmA-7K_Jo6sWlIyfPMIHxJYLKpA&s',
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
      'https://static.wixstatic.com/media/4b5365_4c57906f41004cafb5c2819eb3e78e03~mv2.jpg/v1/fill/w_560,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b5365_4c57906f41004cafb5c2819eb3e78e03~mv2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuAeq10umAtdqgx4VKFn8n3NlaBudqBrxsA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_6RuxNPlBj4OLXpL40ggJCuhk4woOyZ82A&s',
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
      'https://littlespoonfarm.com/wp-content/uploads/2023/01/cinnamon-raisin-swirl-sourdough-bread-recipe.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0BB7q2JYY-Hx9rfb3S3XxXhz_C_KixQmuA&s',
      'https://harvestandnourish.com/wp-content/uploads/2024/06/image-113.jpeg',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMD45JRqz3linBj9CPkcHYAL44Vj3yP9kIA&s',
      'https://makeitdough.com/wp-content/uploads/2024/01/WW-Discard-Bread-18-scaled.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXXG2jUG6XRhgQo9qJlOJq4AmlUlOknBbQw&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxw9o1xFSfodB_LBK62ZTmHITErNjFw3oSUg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkvyazFK9Ko25nnqx97N20u2jmjrV9NHbbQ&s',
      'https://hips.hearstapps.com/hmg-prod/images/brioche-index-67daf44713665.jpeg?crop=0.75xw:1xh;center,top&resize=1200:*',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbkjsPoLc9bgIjV0-xmxsqf6zurU6ZcAr_w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwgrILYdiczeTdGIJ2x0G2n8UpQbN5BOrPg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08IRz4fMHDnOM0_QKR8YRzfj9CBaGOwwk8A&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9FVqjYXGQ-ohIKjoUEGkpAbEgi4Hl0e1EA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DvmpEMB_TKuUPnfLhjr-NP7bYm3-DOyIGQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqUVoyJAJ_fUqoBcW82hzdK0Et8jTxbXfBg&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r_AVauJDrrJVvKc8fLQYMRqQK4GdKs-1pg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiRPSIetKbhyF_KV10gYJ2KFAdSZxapQ__w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0yes9WOmcqdKYzkBO6QRoIofkvDI7LGqYg&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUwW4tvQBtV-4Q0Q0GZaGygoV93KOY1jr5g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9PSLJ6LQml7CKtYLdBi0Nh2ypIc0YwlW3w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb67KduKQfT7eOmgYQ5n49P0c3uDqK49e1wg&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGS1eCi9THH_tVobziYZxCCnF360VJIT3zd8SrTSW5qYIx7UQlIAx-t-cPZZSwORORfU&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccwjnnIcI2r_l-cwKZNoVyMSfXUUsZKd30g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtBXZW_cObJYweIXR_tJoLGmwzOiqsGJKMw&s',
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
      'https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/38939_gold-3-tier-wedding-cake.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pgtT3N-apivk53eSrewzmpSLjIBz1aYWvA&s',
      'https://magicbakers.in/wp-content/uploads/2023/08/Wedding-two-tier47.jpg',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_PGJnO14QyfADh1XewIGL0jpIQ6GTo9-Vw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzG4-YcDfGWVLnlfD0vY_mwvsLzyLZgzh1Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCFjSpu0-q3lYk1EtxgSv5CW5ClNG2v6l4A&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRse6YB1bJIkABcyRY4Bzufjnv8_qu0pvJLuQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mmDIPzCiGIj1kHyphBGmPGqwlJ_xdSVH2Q&s',
      
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGwB0z8S6Ei7Gftl6P9coICXCNWGaUrRt9w&s',
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
      'https://i0.wp.com/cakeseries.com/wp-content/uploads/2022/11/happy-marriage-anniversary-cake-six-delightful.jpg?fit=1080%2C1080&ssl=1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zuNClJLLaF3iX4BuKubddYalChUOJVhI2Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGCfL5xwQaS-CAOhL5W_SftCxsweCSBoYNw&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kEflSxd8IWjKiIfB2H2wF4cttAhN_cvsyQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HcovPQpHLtuQYoLqAXsnF04ujLG6Jlc91A&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBj3aR0pkEoTjGU2xTy6MP7lyJQ6yl44DBpw&s',
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