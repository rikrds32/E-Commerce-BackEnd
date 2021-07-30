const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Product.findAll({
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name'],
      }
    ]
  })
  .then(categorydb => res.json(categorydb))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'tacategory_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name'],
      }
    ]
  })
  .then(categorydb => res.json(categorydb))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
  })
  .then(categorydb => res.json(categorydb))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(categorydb => {
    if(!categorydb) {
      res.status(404).json({ message: 'not found' });
      return;
    }
    res.json(categorydb);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categorydb => {
    if(!tagsdb) {
      res.status(404).JSON({ message: 'not found'});
      return;
    }
    res.JSON(categorydb);
  })
  .catch(err => {
    console.log(err);
    res.status(500).JSON(err);
  });
});


module.exports = router;
