import express from 'express';
import {
  postData,
  fetchPosts,
  getForm,
  editForm
} from '../controllers/postController';

let router = express.Router();

router.post('/post', postData);
router.get('/posts', fetchPosts);
router.get('/getForm/:id', getForm);
router.post('/editForm/:id', editForm);

export { router };