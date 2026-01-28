import { CustomMDX } from 'app/components/mdx'

export function MdxPage({ title, source }: { title: string; source: string }) {
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">{title}</h1>
      <article className="prose">
        <CustomMDX source={source} />
      </article>
    </section>
  )
}

