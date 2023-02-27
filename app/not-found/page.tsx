import BuggyButton from '#/ui/buggy-button';
import { ExternalLink } from '#/ui/external-link';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function Page() {
  // const isHeads = () => Math.random() >= 0.5;

  // console.log(isHeads());

  // if (isHeads()) notFound();

  return (
    <div className="dark">
      <div className=" prose prose-sm dark:prose-invert">
        <h2>Not Found</h2>

        <ul>
          <li>
            <code>
              <Link href="https://beta.nextjs.org/docs/api-reference/file-conventions/not-found">
                not-found.js
              </Link>
            </code>{' '}
            file is used to render UI when the{' '}
            <code>
              <Link href="https://beta.nextjs.org/docs/api-reference/notfound">
                notFound()
              </Link>
            </code>{' '}
            function is thrown within a route segment.
          </li>
          <li>
            In this example, when fetching the data we return{' '}
            <code>notFound()</code> for{' '}
            <Link href="/not-found/does-not-exist">Categories</Link> and{' '}
            <Link href="/not-found/electronics/does-not-exist">
              Sub Categories
            </Link>{' '}
            that do not exist. This renders the closest appropriate{' '}
            <code>not-found.js</code>.
          </li>
          <li>
            <em>
              Note: <code>not-found.js</code> currently only renders when
              triggered by the <code>notFound()</code> function. We&apos;re
              working on support for catching unmatched routes (404).
            </em>
          </li>
        </ul>

        <div className="flex gap-2">
          <ExternalLink href="https://beta.nextjs.org/docs/api-reference/file-conventions/not-found">
            Docs
          </ExternalLink>

          <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/not-found">
            Code
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
