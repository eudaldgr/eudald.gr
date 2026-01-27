import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Aquí escric coses.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        El meu blog
      </h1>
      <BlogPosts />
    </section>
  )
}
