// ============================================================
// YouTube Utilities
// Robust extraction of video IDs from various YouTube URL formats
// and automatic thumbnail URL generation.
// ============================================================

/**
 * Extracts a YouTube video ID from various input formats:
 * - Direct ID (11 chars): "vCPt4wCoPhU"
 * - Standard URL: "https://www.youtube.com/watch?v=vCPt4wCoPhU"
 * - Short URL: "https://youtu.be/vCPt4wCoPhU"
 * - Embed URL: "https://www.youtube.com/embed/vCPt4wCoPhU"
 * - With extra params: "?si=...", "&t=..."
 *
 * Returns the 11-character video ID, or null if parsing fails.
 */
export function extractYouTubeId(input: string): string | null {
  if (!input) return null;

  const trimmed = input.trim();

  // Pattern 1: Direct ID (exactly 11 chars, YouTube ID charset)
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Pattern 2: Various YouTube URL formats
  const patterns = [
    // Standard: youtube.com/watch?v=ID
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*v=([A-Za-z0-9_-]{11})/,
    // Short: youtu.be/ID
    /(?:https?:\/\/)?youtu\.be\/([A-Za-z0-9_-]{11})/,
    // Embed: youtube.com/embed/ID
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
    // Nocookie embed: youtube-nocookie.com/embed/ID
    /(?:https?:\/\/)?(?:www\.)?youtube-nocookie\.com\/embed\/([A-Za-z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  // Fallback: try to extract any 11-char ID-like segment at the start
  // (handles cases like "vCPt4wCoPhU?si=..." where user pasted partial URL)
  const fallback = trimmed.match(/^([A-Za-z0-9_-]{11})/);
  if (fallback?.[1]) {
    return fallback[1];
  }

  return null;
}

/**
 * Returns the high-quality YouTube thumbnail URL for a given video ID.
 * Falls back to hqdefault if maxresdefault might not exist.
 */
export function getYouTubeThumbnail(
  videoId: string,
  quality: 'maxresdefault' | 'hqdefault' = 'hqdefault'
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}
