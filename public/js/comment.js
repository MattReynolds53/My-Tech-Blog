const commentFormHandler = async function (event) {
  event.preventDefault();

  const blog_id = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;
  console.log(blog_id);
  console.log(body);

  if (body) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        blog_id,
        body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
