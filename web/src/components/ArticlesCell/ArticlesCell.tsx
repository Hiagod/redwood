import type { ArticlesQuery } from 'types/graphql'
import { Link, routes } from '@redwoodjs/router'
import Article from 'src/components/Article'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts  {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <>
    {articles.map((article) => (
      <Article key={article.id} article={article} />
    ))}
  </>
  )
}
