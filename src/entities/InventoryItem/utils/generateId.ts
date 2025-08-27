export const generateId = (name: string) => {
    const baseId = name.toLowerCase().replace(/\s+/g, '-');
    const uniqueSuffix = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    return `${baseId}-${uniqueSuffix}`;
}