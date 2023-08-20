import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-4 mt-2 rounded-full bg-slate-100 px-3 py-1 text-xs uppercase text-primary-500 no-underline hover:text-primary-600 dark:bg-neutral-700 dark:text-secondary-400 dark:hover:text-secondary-500"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
