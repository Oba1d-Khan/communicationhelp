import { getPlaiceholder } from "plaiceholder";

// Simple in-memory cache to avoid regenerating the same blur data
const blurCache = new Map();

/**
 * Generate blur placeholder for any image URL
 * @param {string} src - Image URL or path
 * @param {Object} options - Configuration options
 * @returns {Promise<string|null>} Base64 blur data URL or null if failed
 */
export async function getBlurPlaceholder(src, options = {}) {
  // Return null for invalid inputs
  if (!src || typeof src !== "string") {
    return null;
  }

  const { size = 10, quality = 40, cache = true } = options;

  // Check cache first
  if (cache && blurCache.has(src)) {
    return blurCache.get(src);
  }

  try {
    let buffer;

    // Handle different image sources
    if (src.startsWith("http") || src.startsWith("//")) {
      // External URL
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status}`);
      }
      buffer = Buffer.from(await response.arrayBuffer());
    } else {
      // Local file path
      const fs = await import("fs/promises");
      const path = await import("path");
      const imagePath = path.join(process.cwd(), "public", src);
      buffer = await fs.readFile(imagePath);
    }

    // Generate blur placeholder
    const { base64 } = await getPlaiceholder(buffer, { size });

    // Cache the result
    if (cache) {
      blurCache.set(src, base64);
    }

    return base64;
  } catch (error) {
    console.error(
      `Error generating blur placeholder for ${src}:`,
      error.message
    );
    return null;
  }
}

/**
 * Generate blur placeholders for multiple images
 * @param {Array<string>} sources - Array of image URLs/paths
 * @param {Object} options - Configuration options
 * @returns {Promise<Array<string|null>>} Array of blur data URLs
 */
export async function getMultipleBlurPlaceholders(sources, options = {}) {
  if (!Array.isArray(sources)) {
    return [];
  }

  const promises = sources.map((src) => getBlurPlaceholder(src, options));
  return Promise.all(promises);
}

/**
 * Clear the blur cache (useful for memory management)
 */
export function clearBlurCache() {
  blurCache.clear();
}

/**
 * Get current cache size
 */
export function getBlurCacheSize() {
  return blurCache.size;
}
