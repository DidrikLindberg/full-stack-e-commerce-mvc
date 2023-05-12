const router = require('express').Router();
const { User, Product, Review, ProductReview } = require('../models');
const withAuth = require('../utils/auth');



// Prevent non logged in User from viewing the homepage
router.get('/', withAuth, async (req, res) => {

    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['username', 'ASC']],
        });

        const users = userData.map((user) => user.get({ plain: true }));

        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                },
            {
                    model: User, 
                    attributes: ['username'] 
                }
            ],
            order: [['created_at', 'DESC']],
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            users,
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);


router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/homepage', withAuth, async (req, res) => {
    try {
    res.render('homepage', {
    logged_in: req.session.logged_in,
    });
    } catch (err) {
    res.status(500).json(err);
    }
    });


 // get product by id 
router.get('/products/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: ProductReview,
          include: [
            {
              model: User,
              attributes: ['username']
            }
          ]
        }
      ]
    });

    const product = productData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'product' template
    res.render('product', { product, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


  // get all products
  router.get('/products', async (req, res) => {
    try {
      const productData = await Product.findAll();
      const products = productData.map((product) => product.get({ plain: true }));
      res.render('products', { products, logged_in: req.session.logged_in });
    } catch (err) {
      res.status(500).json(err);
    }
  });



  module.exports = router;
  

  // display all blogposts on homepage
    // display all comments on homepage

    // router.get('/', async (req, res) => {
    //     try {
    //         const dbBlogData = await Blog.findAll({
    //             include: [
    //                 {
    //                     model: Post,
    //                     attributes: ['title', 'body'],
    //                 },
    //             ],
    //         });

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // });


    // // Dashboard route
