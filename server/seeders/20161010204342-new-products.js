'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkDelete('Products', null, {}),
      queryInterface.bulkInsert('Products', [{
        category: 'Vase',
        description: 'Beautiful antique Japanese vase, off-white ground color,with fine patterns and design of cherry blossom.',
        size: [70, 70, 120],
        material: 'Ceramic',
        photo: 'asianvase.jpg',
        product3dModel: 'asianvase.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }, {
        category: 'Chair',
        description: 'This Bean Bag Chair offers comfort and style at the same time. It is made of recycle materials and it can convert to a soft if you lay it down.',
        size: [150, 150, 300],
        material: 'Cloth, lima beans',
        photo: 'beanbag.jpg',
        product3dModel: 'beanbag.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 5000
      }, {
        category: 'Bed',
        description: 'The 4 large drawers give you an extra storage space under the bed',
        size: [208, 158, 47],
        material:
          `Bed frame with storage:
          Main parts/ Partition/ Drawer front: Particleboard, Foil, ABS plastic
          Bedside/ Bottom rail: Particleboard, Foil
          Drawer bottom: Fiberboard, Printed and embossed acrylic paint
          Bed end filling: Fiberboard, Foil`
        ,
        photo: 'bed.jpg',
        product3dModel: 'bed.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1600
      }, {
        category: 'Chair',
        description: 'The Bertoia Side Chair is an icon of mid-century modern design. Bertoia found sublime grace in an industrial material, creating a design that works with every decor, in every room.',
        size: [50, 50, 150],
        material:
          `Steel, cloth`
        ,
        photo: 'bertoia.jpg',
        product3dModel: 'bertoia.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }, {
        category: 'Vase',
        description: 'Beautiful Italian vase',
        size: [50, 50, 80],
        material: `Ceramic`,
        photo: 'bluewhitevase.jpg',
        product3dModel: 'bluewhitevase.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }, {
        category: 'Lamp',
        description: 'This stand light is made with recycle materials. The light bulb is eco-friendly and it saves energy as well as protecting eyes.',
        size: [30, 30, 120],
        material:
          `Steel`
        ,
        photo: 'lamp.png',
        product3dModel: 'lamp.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }, {
        category: 'Painting',
        description: 'This canvas is decorated with tree leafs which are a symbol of peace and calm. A perfect decoration for hallway\'s wall and living room.',
        size: [208, 158, 47],
        material:
          `Canvas, oil paint`
        ,
        photo: 'painting.jpg',
        product3dModel: 'painting.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }, {
        category: 'Chair',
        description: 'This chair is hand-made with high-quality fabric materials. It offers comfort and style at the same time.',
        size: [130, 130, 200],
        material:
          `Fabric, wood`
        ,
        photo: 'ringchair.jpg',
        product3dModel: 'ringchair.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }, {
        category: 'Sofa',
        description: 'This three sofa with soft and welcoming shapes, offers endless configuration possibilities. In particular, the three-seater version with longue makes this sofa a real bed. The metal feet lend elegance and sophistication to the sofa. It fits well in both traditional and modern environments.',
        size: [208, 158, 47],
        material:
          `Cloth`
        ,
        photo: 'threeseatsofa.jpg',
        product3dModel: 'threeseatsofa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }, {
        category: 'Sofa',
        description: 'Trescani sofa',
        size: [208, 158, 47],
        material:
          `Leather`
        ,
        photo: 'trescanisofa.jpg',
        product3dModel: 'trescanisofa.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }, {
        category: 'Storage',
        description: 'Wood tv stand',
        size: [208, 158, 47],
        material: 'Wood',
        photo: 'tvbox.jpg',
        product3dModel: 'tvbox.wt3',
        createdAt: new Date(),
        updatedAt: new Date(),
        scale: 1
      }])
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
