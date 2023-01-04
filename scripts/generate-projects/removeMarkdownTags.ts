/**
 * Removes Markdown tags from a string.
 *
 * @param {string} str - The string to remove Markdown tags from.
 * @returns {string} The input string with all Markdown tags removed.
 */
export function removeMarkdownTags(str: string): string {
    // Use a regular expression to remove Markdown tags from the string
    return str.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
}
