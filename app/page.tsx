import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hola, sóc l'Eudald 👋
      </h1>
      <p className="mb-4">
        Sóc un <mark className="mdx-highlight mdx-highlight-green">desenvolupador de programari</mark> apassionat per
        l'open source i la tecnologia. M'agrada programari apassionat per l'open source i la tecnologia. M'agrada
        escriure sobre els meus projectes, experiències i aprenentatges en el món del desenvolupament, la seguretat,
        el <mark className="mdx-highlight mdx-highlight-orange">DevOps</mark> i la infraestructura.
      </p>
      <p className="mb-4">
        A més a més, gaudeixo cuinant i explorant la natura a través del
        senderisme.
      </p>
      <div className="my-8">
        <h3 className="mb-4 text-lg font-semibold tracking-tighter">
          Articles recents
        </h3>
        <BlogPosts />
      </div>
    </section>
  )
}
