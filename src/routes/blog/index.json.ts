import type { ServerResponse } from 'http';
import type { Request } from 'polka';
import posts from './_posts';

const contents = JSON.stringify(
  posts.map(post => {
    return {
      title: post.title,
      slug: post.slug
    };
  })
);

export function get(_: Request, res: ServerResponse) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
