import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/2wqCeedJluDyFIgXwvQavZAj8o3mQ6uTVLMYpysOdSJkhcHb',
  'https://utfs.io/f/2wqCeedJluDy7CXjkRVrCUaiY9Z3dlmpgVWPEwhIeKtFbnBk',
  'https://utfs.io/f/2wqCeedJluDy6KhLMYYAZoR1vK4yXVaiGfcFWrBdzj6sI83E'
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post, index) => (
          <div key={post + "-" + index}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
