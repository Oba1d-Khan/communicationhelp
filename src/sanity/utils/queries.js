export const BOOKS_BY_CATEGORY_QUERY = `
*[_type == "bookCategory"] | order(title asc) {
  _id,
  title,
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
