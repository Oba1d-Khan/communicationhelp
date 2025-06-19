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
export const ALL_BLOGS_QUERY = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  featured,
  "topic": topic->title,
  content
}`

export const BLOG_BY_SLUG_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    title,
    publishedAt,
    coverImage,
    excerpt,
    content,
    "topic": topic->title
  }
`
