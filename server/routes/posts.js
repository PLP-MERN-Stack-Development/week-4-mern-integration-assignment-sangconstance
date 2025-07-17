//Imports
const express = require('express');
const { body, validationResult } = require('express-validator');
const Post = require('../models/Post');
const router = express.Router();

// GET /api/posts
router.get('/', async (req, res) => {
  const { page = 1, limit = 10, category } = req.query;
  const filter = category ? { category } : {};
  const posts = await Post.find(filter)
    .populate('category')
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(posts);
});

// GET /api/posts/:id
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id).populate('category');
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// POST /api/posts
router.post(
  '/',
  body('title').notEmpty(),
  body('content').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  }
);

// PUT /api/posts/:id
router.put('/:id', async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// DELETE /api/posts/:id
router.delete('/:id', async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json({ message: 'Post deleted' });
});

// POST /api/posts/:id/comments
router.post('/:id/comments', body('text').notEmpty(), async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  post.comments.push({ user: req.body.user || 'Anonymous', text: req.body.text });
  await post.save();
  res.json(post);
});

module.exports = router;