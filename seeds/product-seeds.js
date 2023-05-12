const { Product } = require('../models');

const productData = [
    
        {
          product_name: 'Plain T-Shirt',
          price: 14.99,
          stock: 14,
          category_id: 1,
          product_description: 'A classic and versatile t-shirt, perfect for any casual occasion. Made from 100% cotton and available in a range of colors.'
        },
        {
          product_name: 'Running Sneakers',
          price: 90.0,
          stock: 25,
          category_id: 5,
          product_description: 'Experience the ultimate comfort and support during your runs with our high-performance running sneakers. Featuring advanced cushioning technology and a breathable mesh upper.'
        },
        {
          product_name: 'Branded Baseball Hat',
          price: 22.99,
          stock: 12,
          category_id: 4,
          product_description: 'Show off your love for our brand with this stylish and comfortable baseball hat. Featuring an embroidered logo and adjustable strap.'
        },
        {
          product_name: 'Top 40 Music Compilation Vinyl Record',
          price: 12.99,
          stock: 50,
          category_id: 3,
          product_description: 'Relive the greatest hits of the past year with this exclusive vinyl compilation of the top 40 songs. Featuring popular artists from a variety of genres.'
        },
        {
          product_name: 'Cargo Shorts',
          price: 29.99,
          stock: 22,
          category_id: 2,
          product_description: 'Get ready for your next outdoor adventure with our rugged cargo shorts. Made from durable cotton and featuring multiple pockets for storage.'
        },
        {
          product_name: 'Wireless Bluetooth Earbuds',
          price: 79.99,
          stock: 15,
          category_id: 5,
          description: 'Experience true wireless freedom with these Bluetooth earbuds. Perfect for workouts or just listening to music on the go, they deliver high-quality sound and a comfortable fit. With a charging case that provides up to 24 hours of battery life, you can stay connected all day long.'
        },
        {
          product_name: 'Smartphone Gimbal Stabilizer',
          price: 129.99,
          stock: 10,
          category_id: 6,
          description: 'Get professional-quality video with this smartphone gimbal stabilizer. With 3-axis stabilization, it keeps your phone steady and smooth even while you move. It also has features like object tracking and gesture control, so you can capture amazing footage with ease.'
        },
        {
        product_name: 'Meditation Cushion',
        price: 39.99,
        stock: 20,
        category_id: 7,
        description: 'Find your zen with this meditation cushion. Designed to provide support and comfort during meditation, it features a soft, durable cover and a supportive inner cushion. Whether you\'re a seasoned meditator or just starting out, this cushion is the perfect tool for your practice.'
        },
        {
        product_name: 'Wireless Charging Pad',
        price: 29.99,
        stock: 30,
        category_id: 6,
        description: 'Say goodbye to tangled cords and messy cables with this wireless charging pad. Simply place your compatible device on the pad and watch as it charges quickly and easily. With a sleek, modern design, it looks great on any desk or nightstand.'
        },
        {
        product_name: 'Portable Power Bank',
        price: 49.99,
        stock: 25,
        category_id: 6,
        description: 'Stay connected on the go with this portable power bank. With a capacity of 10,000mAh, it can charge your phone multiple times before needing to be recharged itself. It\'s compact and lightweight, making it perfect for travel or everyday use.'
        },
        {
        product_name: 'Reusable Water Bottle',
        price: 24.99,
        stock: 40,
        category_id: 8,
        description: 'Stay hydrated and reduce waste with this reusable water bottle. Made from durable, BPA-free materials, it\'s designed to last for years. With a sleek, modern design and a variety of colors to choose from, it\'s the perfect accessory for any active lifestyle.'
        }
        
      
      
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
