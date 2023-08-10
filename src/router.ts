import { Router } from 'express';
import { body, validationResult } from 'express-validator';

// making a new router
const router = Router();
//router are sub apps, seperate from app, which is global

// product
router.get('/product', (req, res) => {
  res.json({ message: 'Hello' });
});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), (req, res) => {
  //to get the validation results
  const errors = validationResult(req);
  //check to see for errors
  if (!errors.isEmpty()) {
    res.status(400);
    //sending back json with a array of errors
    res.json({ errors: errors.array() });
  }
});
router.post('/product/', () => {});
router.delete('/product/:id', () => {});

//update
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', () => {});
router.post('/update/', () => {});
router.delete('/update/:id', () => {});

//update point
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', () => {});
router.post('/updatepoint/', () => {});
router.delete('/updatepoint/:id', () => {});

//dfdf
export default router;
