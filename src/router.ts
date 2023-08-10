import { Router } from 'express';

// making a new router
const router = Router();
//router are sub apps, seperate from app, which is global

// product
router.get('/product', (req, res) => {
  res.json({ message: 'Hello' });
});
router.get('/product/:id', () => {});
router.put('/product/:id', () => {});
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

export default router;
