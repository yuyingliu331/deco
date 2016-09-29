'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // product format:
    // {
    //   category: '',
    //   room: '',
    //   description: '',
    //   size: [],
    //   color: [],
    //   material: '',
    //   price: '',
    //   photo: '',
    //   product3dModel: '',
    //   style: ''
    // }
    queryInterface.bulkInsert('Products', [{
      category: 'Bed',
      room: 'Bedroom',
      description: 'The 4 large drawers give you an extra storage space under the bed',
      size: [208, 158, 47],
      color: ['000000000'],
      material:
        `Bed frame with storage:
        Main parts/ Partition/ Drawer front: Particleboard, Foil, ABS plastic
        Bedside/ Bottom rail: Particleboard, Foil
        Drawer bottom: Fiberboard, Printed and embossed acrylic paint
        Bed end filling: Fiberboard, Foil`
      ,
      price: 40900,
      photo: 'IKEA_bed_BRIMNES.JPG',
      product3dModel: 'IKEA_bed_BRIMNES.obj',
      style: 'modern',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Bed',
      room: 'Bedroom',
      description: 'Bed frame, high, brown stained ash veneer, Leirsund',
      size: [199, 150, 100],
      color: ['000000000'],
      material:
        `Bed frame, high:
        Head/footboard: Particleboard, Moisture resistant MDF, Fiberboard, Ash veneer, Stain, Clear acrylic lacquer, Printed acrylic paint, ., ABS plastic, Paper, Paper
        Bedside: Particleboard, Moisture resistant MDF, Fiberboard, Paper, Ash veneer, Stain, Clear acrylic lacquer, Printed acrylic paint, ., Paper, ABS plastic, Paper`
      ,
      price: 35900,
      photo: 'IKEA_bed_MALM.JPG',
      product3dModel: 'IKEA_bed_MALM.obj',
      style: 'modern',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Bookcase',
      room: 'Living',
      description: 'Solid wood has a natural feel. The shelves are adjustable so you can customize your storage as needed.',
      size: [90, 37, 197],
      color: ['000000000'],
      material: 'Solid pine, Stain, Clear acrylic lacquer',
      price: 14900,
      photo: 'IKEA_bookcase_HEMNES.JPG',
      product3dModel: 'IKEA_bookcase_HEMNES.obj',
      style: 'classic',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Chair',
      room: 'Living',
      description: 'The high back provides good support for your neck and head. Durable cover of chenille quality with a slight sheen and a soft feel.',
      size: [86, 78, 90],
      color: ['000000000'],
      material:
        `Seat cushion: Polyester wadding, Polyurethane foam., Polyurethane memory foam.
        Frame: Particleboard, Plywood, Solid wood
        Leg: Solid pine, Tinted clear polyurethane/acrylic lacquer
        Total composition: 77 % polyester, 23 % viscose/rayon`
      ,
      price: 29900,
      photo: 'IKEA_chair_EKENAS.JPG',
      product3dModel: 'IKEA_chair_EKENAS.obj',
      style: 'modern',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Chair',
      room: 'Office',
      description: 'Conference chair, dark gray Ullevi Ultuna dark gray',
      size: [60, 55, 83],
      color: ['000000'],
      material:
        `Total composition: 100 % wool
        Frame: Steel
        Foam: High resilient polyurethane foam (cold foam).
        Leg: Steel, Epoxy/polyester powder coating
        Feet: Polyamide`
      ,
      price: 14900,
      photo: 'IKEA_chair_PATRIK.JPG',
      product3dModel: 'IKEA_chair_PATRIK.obj',
      style: 'modern',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Desk',
      room: 'Office',
      description: 'You can fit a computer in the cabinet since the shelf is adjustable.',
      size: [145, 65, 73],
      color: ['000000000'],
      material:
        `Table top/ Other parts: Fiberboard, Polyester paint
        Side panel/ Shelf: Particleboard, ABS plastic, Polyester paint
        Bottom panel: Particleboard, Melamine foil, Foil`
      ,
      price: 29900,
      photo: 'IKEA_desk_LIATORP.JPG',
      product3dModel: 'IKEA_desk_LIATORP.obj',
      style: 'classic',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Sofa',
      room: 'Living',
      description: 'Seat cushions filled with high resilience foam and polyester fiber wadding provide comfortable support for your body when seated, and easily regain their shape when you rise.',
      size: [218, 88, 88],
      color: ['000000000'],
      material:
        `Sofa frame:
        Back and seat frame: Fiberboard, Particleboard, Plywood, Solid wood, Polyurethane foam 1.2 lb/cu.ft.
        Armrest: Hollow fiber polyester wadding, Fiberboard, Particleboard, Solid wood, Cardboard, Polyurethane foam 1.2 lb/cu.ft., Polyurethane foam 1.5 lb/cu.ft.
        Seat cushion: Non-woven polypropylene, High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft., Polyester fiber balls
        Back cushion: Hollow polyester fibers, Non-woven polypropylene`
      ,
      price: 49900,
      photo: 'IKEA_sofa_EKTORP.JPG',
      product3dModel: 'IKEA_sofa_EKTORP.obj',
      style: 'classic',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Table',
      room: 'Dining',
      description: 'A round table with soft edges gives a relaxed impression in a room.',
      size: [105, 105, 75],
      color: ['000000000'],
      material: '',
      price: 17900,
      photo: 'IKEA_table_DOCKSTA.JPG',
      product3dModel: 'IKEA_table_DOCKSTA.obj',
      style: 'classic',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Table',
      room: 'Dining',
      description: 'The table top made of tempered glass is easy to clean and more durable than ordinary glass.',
      size: [135, 85, 74],
      color: ['000000000'],
      material:
        `Underframe:
        Main parts: Steel, Chrome plated
        Foot: Polypropylene

        Table top:
        Tempered glass`
      ,
      price: 19900,
      photo: 'IKEA_table_TORSBY.JPG',
      product3dModel: 'IKEA_table_TORSBY.obj',
      style: 'modern',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Wardrobe',
      room: 'Bedroom',
      description: 'Adjustable hinges ensure that the doors hang straight.',
      size: [81, 50, 180],
      color: ['000000000'],
      material:
        `Main parts: Particleboard, ABS plastic, Polypropylene
        Back: Fiberboard, Acrylic paint
        Leg: Fiberboard, Foil
        Door frame: Particleboard, Foil
        Door panel: Polypropylene`
      ,
      price: 9999,
      photo: 'IKEA_wardrobe_ANEBODA.JPG',
      product3dModel: 'IKEA_wardrobe_ANEBODA.obj',
      style: 'modern',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Products', null, {});
  }
};
