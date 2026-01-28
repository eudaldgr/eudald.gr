import fs from 'fs'
import path from 'path'
import { MdxPage } from 'app/components/mdx-page'
import { unstable_noStore as noStore } from 'next/cache'

export const metadata = {
  title: 'Pull requests',
  description: 'Aquí recopilo les meves pull requests públiques.',
}

export default function Page() {
  noStore()
  const source = fs.readFileSync(
    path.join(process.cwd(), 'app', 'pull-requests', 'page.mdx'),
    'utf8'
  )
  return <MdxPage title="Pull requests" source={source} />
}
