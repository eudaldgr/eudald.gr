import fs from 'fs'
import path from 'path'
import { MdxPage } from 'app/components/mdx-page'
import { unstable_noStore as noStore } from 'next/cache'

export const metadata = {
  title: 'Projectes',
  description: 'Aquí escric sobre els meus projectes públics.',
}

export default function Page() {
  noStore()
  const source = fs.readFileSync(
    path.join(process.cwd(), 'app', 'projectes', 'page.mdx'),
    'utf8'
  )
  return <MdxPage title="Projectes" source={source} />
}
