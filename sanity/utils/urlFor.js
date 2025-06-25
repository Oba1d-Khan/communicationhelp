import createImageUrlBuilder from '@sanity/image-url'
import {client} from '../client'

const builder = createImageUrlBuilder(client)

export function urlForImage(source) {
  return builder.image(source)
}
