const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Product.findAll({
    attributes: [
      'id',
      'tag_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name'],
      }
    ]
  })
  .then(tagsdb => res.json(tagsdb))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'tag_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name'],
      }
    ]
  })
  .then(tagsdb => res.json(tagsdb))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  })
  .then(tagsdb => res.json(tagsdb))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(tagsdb => {
    if(!tagsdb) {
      res.status(404).json({ message: 'not found' });
      return;
    }
    res.json(tagsdb);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(tagsdb => {
    if(!tagsdb) {
      res.status(404).JSON({ message: 'not found'});
      return;
    }
    res.JSON(tagsdb);
  })
  .catch(err => {
    console.log(err);
    res.status(500).JSON(err);
  });
});

module.exports = router;
