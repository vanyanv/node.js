import prisma from '../db';

//get one update
export const getOneUpdate = async (req, res) => {
  const id = req.params.id;
  const update = await prisma.update.findUnique({
    where: {
      id: id,
    },
  });
  res.json({
    data: update,
  });
};

// get all update
export const getUpdates = async (req, res) => {
  //going thru all products and getting the updates on those products
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    //if they linclude the product maching that user return all the updates
    include: {
      updates: true,
    },
  });

  res.json({ data: products });
};

//create update
export const createUpdate = async (req, res) => {
  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      productId: req.params.id,
    },
  });
};
//update update
export const updateUpdate = async (req, res) => {};
//delete update
export const deleteUpdate = async (req, res) => {};
