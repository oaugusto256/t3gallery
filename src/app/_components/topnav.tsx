import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between p-4 border-b text-xl font-semibold">
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}