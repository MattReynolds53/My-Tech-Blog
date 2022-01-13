const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// There is a missing connection between the blogPost ID and the comment ID because the following console log shows that req.session.userId is undefined and the postId is showing up as an empty string in the console (from line 8-9). How can I fix that issue? The comments are showing up in the Workbench, but I'm not sure why they aren't apending to the blog post itself (I am assuming it is because of the aforementioned issue).
router.post('/', withAuth, async (req, res) => {
  console.log('HELLO', req.body, req.session);
  try {const newComment = await Comment.create({ ...req.body, user_id: req.session.user_id })
  res.status(200).json(newComment)
} catch(err){
    
      res.status(500).json(err);
    };
});

module.exports = router;
