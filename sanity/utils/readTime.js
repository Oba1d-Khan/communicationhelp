export function calculateReadTime(text) {
  const wordsPerMinute = 200
  const wordCount = text.trim().split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return readTime
}
