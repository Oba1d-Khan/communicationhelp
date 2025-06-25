// ------------------ BOOKS -----------------
export const BOOKS_BY_CATEGORY_QUERY = `
*[_type == "bookCategory"] | order(title asc) {
  _id,
  category,
  slug,
  description,
  "books": *[
    _type == "book" &&
    references(^._id)
  ] | order(title asc) {
    _id,
    title,
    author,
    coverImage,
    purchaseLink
  }
}
`
// ------------------ TOPICS -----------------
export const ALL_TOPICS_QUERY = `
  *[_type == "topic"] | order(title asc) {
    _id,
    title
  }
`
// ------------------ BLOGS -----------------
export const ALL_BLOGS_QUERY = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  featured,
  topic->{title, _id},
  content
}`

export const ALL_BLOGS_META_QUERY = `*[_type == "blog"]{title, slug, publishedAt}`

export const BLOG_BY_SLUG_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    publishedAt,
    coverImage,
    excerpt,
    content,
    topic->{title, _id}
  }
`
export const RELATED_BLOGS_QUERY = `
  *[
    _type == "blog" &&
    topic._ref == $topic &&
    slug.current != $slug
  ]
  | order(publishedAt desc)[0...2] {
    title,
    "slug": slug,
    excerpt,
    coverImage,
    publishedAt,
    topic->{title, _id}
  }
`
