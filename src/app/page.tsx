import Link from "next/link";

const mockUrls = [
  'https://utfs.io/f/2wqCeedJluDyFIgXwvQavZAj8o3mQ6uTVLMYpysOdSJkhcHb',
  'https://utfs.io/f/2wqCeedJluDy7CXjkRVrCUaiY9Z3dlmpgVWPEwhIeKtFbnBk',
  'https://utfs.io/f/2wqCeedJluDy6KhLMYYAZoR1vK4yXVaiGfcFWrBdzj6sI83E'
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
