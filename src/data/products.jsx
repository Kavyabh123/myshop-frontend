const products = [
  {
  id: 1,
  name: "MacBook Air M4",
  price: 97900,
  rating: 4.8,
  category: "Laptops",
  description: "Apple MacBook Air with M4 chip, ultra-fast performance, lightweight design, and all-day battery life.",
  image: "/images/products/macbook/midnight1.png", // main preview
  colors: [
    {
      name: "Sky Blue",
      hex: "#87ceeb",
      images: [
        "/images/products/macbook/skyblue1.png", // your uploaded side view
        "/images/products/macbook/skyblue2.png"  // your uploaded display view
      ]
    },
    {
     name: "Silver",
      hex: "#c0c0c0",
      images: [
        "/images/products/macbook/silver1.png", // your uploaded front view
        "/images/products/macbook/silver2.png"  // your uploaded top view
      ]
    },
    {
      name: "Midnight",
      hex: "#000000",
      images: [
        "/images/products/macbook/midnight1.png", // your uploaded front view
        "/images/products/macbook/midnight2.png"  // your uploaded top view
      ]
    }
  ],
   reviews: [
    { rating: 5, comment: "Super fast and perfect for coding!" },
    { rating: 4, comment: "Battery life is amazing." }
  ],
  offer: "🔥 10% OFF + Free Delivery"
},

 {
  id: 2,
  name: "iPhone 17 Pro",
  price: 89999,
  rating: 4.9,
  category: "Mobiles",
  description: "Latest iPhone with advanced camera system, A-series chip, and premium design.",

  // Main image
  image: "/images/products/iphone/silver1.png", // default preview
  colors: [
    {
      name: "Silver / White Titanium",
      hex: "#c0c0c0",
      images: [
        "/images/products/iphone/silver1.png", // front + back view
        "/images/products/iphone/silver2.png", // metallic back view
        "/images/products/iphone/silver3.png"  // third silver/white titanium view
      ]
    },
    {
      name: "Blue Titanium",
      hex: "#0000ff",
      images: [
        "/images/products/iphone/blueti1.png",
        "/images/products/iphone/blueti2.png",
        "/images/products/iphone/blueti3.png"
      ]
    },
    {
      name: "Natural Titanium",
      hex: "#8d8d8d",
      images: [
        "/images/products/iphone/natural1.png",
        "/images/products/iphone/natural2.png",
        "/images/products/iphone/natural3.png"
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Best camera phone ever!" },
    { rating: 5, comment: "Smooth and premium feel." }
  ],
  offer: "🎁 Exchange Bonus Available"
},

{
  id: 3,
  name: "Apple AirPods Max",
  price: 59999,
  rating: 4.8,
  category: "Audio",
  description: "Apple AirPods Max with premium sound, active noise cancellation, and luxurious design.",
  // Main image
  image: "/images/products/headphones/black1.png", // default preview
  colors: [
    {
      name: "Blue",
      hex: "#0000ff",
      images: [
        "/images/products/headphones/blue1.png",
        "/images/products/headphones/blue2.png",
        "/images/products/headphones/blue3.png"
      ]
    },
    {
      name: "Space Gray / Black",
      hex: "#1c1c1c",
      images: [
        "/images/products/headphones/black1.png",
        "/images/products/headphones/black2.png",
        "/images/products/headphones/black3.png"
      ]
    },
    {
      name: "Silver",
      hex: "#c0c0c0",
      images: [
        "/images/products/headphones/silver1.png",
        "/images/products/headphones/silver2.png",
        "/images/products/headphones/silver3.png"
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Incredible noise cancellation and sound quality!" },
    { rating: 4, comment: "Premium build, but slightly heavy." }
  ],
  offer: "🎧 Flat 10% OFF + Free Case"
  },

  {
  id: 4,
  name: "Samsung Galaxy S25",
  price: 56999,
  rating: 4.7,
  category: "Mobiles",
  description: "Samsung Galaxy S25 with Snapdragon 8 Elite processor, 50MP triple camera, and Dynamic AMOLED 2X display.",

  // Main image
  image: "/images/products/samsung/icyblue1.png", // default preview
  colors: [
    {
      name: "Icy Blue",
      hex: "#87ceeb",
      images: [
        "/images/products/samsung/icyblue1.png",
        "/images/products/samsung/icyblue2.png",
        "/images/products/samsung/icyblue3.png"
      ]
    },
    {
      name: "Mint",
      hex: "#98ff98",
      images: [
        "/images/products/samsung/mint1.png",
        "/images/products/samsung/mint2.png",
        "/images/products/samsung/mint3.png"
      ]
    },
    {
      name: "Navy",
      hex: "#000080",
      images: [
        "/images/products/samsung/navy1.png", // dark blue front + back
        "/images/products/samsung/navy2.png", // navy back view
        "/images/products/samsung/navy3.png"  // glossy navy finish
      ]
    }
  ],
  reviews: [
     { rating: 5, comment: "Stunning design and smooth performance!" },
    { rating: 4, comment: "Camera is excellent, battery could be bigger." }
  ],
  offer: "🎁 Launch Offer: Free Galaxy Buds"
},

{
  id: 5,
  name: "Apple Watch Series 10",
  price: 45999,
  rating: 4.8,
  category: "Watches",
  description: "Apple Watch Series 10 with advanced health sensors, GPS + LTE, and premium design.",

  // Main image
  image: "/images/products/applewatch/jetblack1.png", // default preview
  colors: [
    {
      name: "Jet Black",
      hex: "#000000",
      images: [
        "/images/products/applewatch/jetblack1.png", // front view
        "/images/products/applewatch/jetblack2.png", // back sensor view
        "/images/products/applewatch/jetblack3.png"  // side view with crown
      ]
    },
    {
      name: "Rose Gold",
      hex: "#b76e79",
      images: [
        "/images/products/applewatch/rosegold1.png", // front view
        "/images/products/applewatch/rosegold2.png", // woven band
        "/images/products/applewatch/rosegold3.png"  // clasp view
      ]
    },
    {
      name: "Silver",
      hex: "#c0c0c0",
      images: [
        "/images/products/applewatch/silver1.png", // front view with yellow band
        "/images/products/applewatch/silver2.png", // silver case with dark blue band
        "/images/products/applewatch/silver3.png"  // close-up crown view
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Stylish colors and premium build quality!" },
    { rating: 4, comment: "Great smartwatch, battery could be longer." }
  ],
  offer: "⌚ Free Extra Strap with Purchase"
},

{
  id: 6,
  name: "Apple iPad Pro / iPad Air",
  price: 89999,
  rating: 4.9,
  category: "Tablets",
  description: "Apple iPad Pro and iPad Air with M4 chip, advanced display, and Apple Pencil Pro support.",

  // Main image
  image: "/images/products/ipad/spaceblack1.png", // default preview
  colors: [
    {
      name: "Space Black",
      hex: "#1c1c1c",
      images: [
        "/images/products/ipad/spaceblack1.png",
        "/images/products/ipad/spaceblack2.png",
        "/images/products/ipad/spaceblack3.png"
      ]
    },
    {
      name: "Silver",
      hex: "#c0c0c0",
      images: [
        "/images/products/ipad/silver1.png",
        "/images/products/ipad/silver2.png",
        "/images/products/ipad/silver3.png"
      ]
    },
    {
      name: "Blue",
      hex: "#0000ff",
      images: [
        "/images/products/ipad/blue1.png", // front + back view
        "/images/products/ipad/blue2.png", // abstract wallpaper
        "/images/products/ipad/blue3.png"  // slim profile view
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Blue color looks fresh and modern!" },
    { rating: 4, comment: "Excellent performance, premium design." }
  ],
  offer: "📦 Free Apple Pencil Pro with iPad Pro"
},

{
  id: 7,
  name: "JBL Flip 6",
  price: 12999,
  rating: 4.6,
  category: "Audio",
  description: "JBL Flip 6 portable Bluetooth speaker with powerful sound, waterproof design, and 12 hours of playtime.",

  // Main image
  image: "/images/products/jbl/black2.png", // default preview
  colors: [
    {
      name: "Black",
      hex: "#000000",
      images: [
        "/images/products/jbl/black1.png",
        "/images/products/jbl/black2.png",
        "/images/products/jbl/black3.png"
      ]
    },
    {
      name: "Blue",
      hex: "#0000ff",
      images: [
        "/images/products/jbl/blue1.png",
        "/images/products/jbl/blue2.png",
        "/images/products/jbl/blue3.png"
      ]
    },
    {
      name: "Red",
      hex: "#ff0000",
      images: [
        "/images/products/jbl/red1.png", // front view with JBL logo
        "/images/products/jbl/red2.png", // angled view with passive radiator
        "/images/products/jbl/red3.png"  // Flip 6 controls in red
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Amazing bass and crystal-clear sound!" },
    { rating: 4, comment: "Durable build, perfect for outdoors." }
  ],
  offer: "🔊 Flat 15% OFF + Free Carry Case"
},

{
  id: 8,
  name: "HP Laptop",
  price: 55999,
  rating: 4.5,
  category: "Laptops",
  description: "HP Laptop with Windows 11, sleek design, and powerful performance for work and entertainment.",

  // Main image
  image: "/images/products/hp/black3.png", // default preview
  colors: [
    {
      name: "Silver",
      hex: "#c0c0c0",
      images: [
        "/images/products/hp/silver1.png",
        "/images/products/hp/silver2.png",
        "/images/products/hp/silver3.png"
      ]
    },
    {
      name: "Space Blue",
      hex: "#1e3a8a",
      images: [
        "/images/products/hp/spaceblue1.png",
        "/images/products/hp/spaceblue2.png",
        "/images/products/hp/spaceblue3.png"
      ]
    },
    {
      name: "Black",
      hex: "#000000",
      images: [
        "/images/products/hp/black1.png", // Windows 10 desktop view
        "/images/products/hp/black2.png", // HP Spectre x360 dark matte finish
        "/images/products/hp/black3.png"  // convertible tent mode
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Sleek silver design, perfect for office use!" },
    { rating: 4, comment: "Good performance, battery could last longer." }
  ],
  offer: "💻 Free Laptop Bag with Purchase"
},

{
  id: 9,
  name: "Nothing Phone (3a)",
  price: 34999,
  rating: 4.6,
  category: "Mobiles",
  description: "Nothing Phone (3a) in White with Glyph Interface, dual cameras, and transparent design aesthetic.",

  // Main image
  image: "/images/products/nothing/black1.png", // default preview
  colors: [
    {
      name: "White",
      hex: "#ffffff",
      images: [
        "/images/products/nothing/white1.png", // front view with UI
        "/images/products/nothing/white2.png", // transparent back with Glyph lights
        "/images/products/nothing/white3.png"  // angled side profile
      ]
    },
    {
      name: "Black",
      hex: "#000000",
      images: [
        "/images/products/nothing/black1.png", // front view with UI
        "/images/products/nothing/black2.png", // transparent back with Glyph lights
        "/images/products/nothing/black3.png"  // angled side profile
      ]
    },
    {
     name: "Blue",
      hex: "#0000ff",
      images: [
        "/images/products/nothing/blue1.png", // front view with UI
        "/images/products/nothing/blue2.png", // transparent back with Glyph lights
        "/images/products/nothing/blue3.png"  // angled side profile
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Minimalist design, Glyph lights are unique!" },
    { rating: 4, comment: "Great performance, but battery could be bigger." }
  ],
  offer: "🎁 Launch Offer: Free Transparent Case"
},

{
  id: 10,
  name: "Apple AirPods Pro",
  price: 24999,
  rating: 4.7,
  category: "Audio",
  description: "Apple AirPods Pro with Active Noise Cancellation, Transparency Mode, and Adaptive Audio.",

  // Main image
  image: "/images/products/airpods/black1.png", // default preview
  colors: [
    {
      name: "Black",
      hex: "#000000",
      images: [
        "/images/products/airpods/black1.png", // front view
        "/images/products/airpods/black2.png", // angled view
        "/images/products/airpods/black3.png"  // case close-up
      ]
    },
    {
      name: "Blue",
      hex: "#0000ff",
      images: [
        "/images/products/airpods/blue1.png", // front view
        "/images/products/airpods/blue2.png", // angled view
        "/images/products/airpods/blue3.png"  // case close-up
      ]
    },
    {
      name: "White",
      hex: "#ffffff",
      images: [
        "/images/products/airpods/white1.png", // front view
        "/images/products/airpods/white2.png", // angled view
        "/images/products/airpods/white3.png"  // case close-up
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Noise cancellation is incredible!" },
    { rating: 4, comment: "Comfortable fit, stylish colors." }
  ],
  offer: "🎧 Flat 10% OFF + Free Case"
},

{
  id: 11,
  name: "Samsung QLED 55-inch TV",
  price: 79999,
  rating: 4.8,
  category: "Streaming",
  description: "Samsung QLED 55-inch 4K Smart TV with Quantum HDR, Dolby Atmos, and sleek premium design.",

  // Main image
  image: "/images/products/samsungtv/black1.png", // default preview
  colors: [
    {
      name: "Black",
      hex: "#000000",
      images: [
        "/images/products/samsungtv/black1.png", // front view
        "/images/products/samsungtv/black2.png", // angled view
        "/images/products/samsungtv/black3.png"  // side profile
      ]
    },
    {
      name: "Titan Gray",
      hex: "#4b4b4b",
      images: [
        "/images/products/samsungtv/titangray1.png", // front view
        "/images/products/samsungtv/titangray2.png", // angled view
        "/images/products/samsungtv/titangray3.png"  // slim bezel close-up
      ]
    },
    {
      name: "Silver",
      hex: "#c0c0c0",
      images: [
        "/images/products/samsungtv/silver1.png", // front view
        "/images/products/samsungtv/silver2.png", // angled view
        "/images/products/samsungtv/silver3.png"  // side profile
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Stunning picture quality and sleek design!" },
    { rating: 4, comment: "Smart features are excellent, sound could be louder." }
  ],
  offer: "📺 Free Wall Mount + 1 Year Extended Warranty"
},

{
  id: 12,
  name: "Sony PlayStation 5 Slim",
  price: 49999,
  rating: 4.9,
  category: "Streaming",
  description: "Sony PlayStation 5 Slim with ultra-fast SSD, 4K gaming, and sleek design in multiple finishes.",

  // Main image
  image: "/images/products/ps5/white3.png", // default preview
  colors: [
    {
      name: "White",
      hex: "#ffffff",
      images: [
        "/images/products/ps5/white1.png", // front view
        "/images/products/ps5/white2.png", // angled view
        "/images/products/ps5/white3.png"  // side profile
      ]
    },
    {
      name: "Black",
      hex: "#000000",
      images: [
        "/images/products/ps5/black1.png", // front view
        "/images/products/ps5/black2.png", // angled view
        "/images/products/ps5/black3.png"  // side profile
      ]
    },
    {
      name: "Special Edition",
      hex: "#FFD700", // gold accent or custom design
      images: [
        "/images/products/ps5/special1.png", // themed edition front
        "/images/products/ps5/special2.png", // angled view
        "/images/products/ps5/special3.png"  // close-up design
      ]
    }
  ],
  reviews: [
    { rating: 5, comment: "Next-gen gaming experience, sleek design!" },
    { rating: 4, comment: "Special Edition looks amazing, worth it." }
  ],
  offer: "🎮 Free DualSense Controller with Purchase"
}

];
export default products;

