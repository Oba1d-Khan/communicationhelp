export function formattedDate(getDate) {
  const date = new Date(getDate)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const updatedDate = date.toLocaleDateString('en-US', options)

  return updatedDate
}
