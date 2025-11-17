export function sanitizeClassName(toSanitize) {
    toSanitize = toSanitize.toLowerCase();
    return toSanitize.replace(/[^a-zA-Z0-9]/g, '-');
}