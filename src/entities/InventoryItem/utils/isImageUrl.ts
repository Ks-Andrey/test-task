import { IMAGE_EXTENSIONS } from "../model/constants";

export const isImageUrl = (urlStr: string): boolean => {
    try {
        const url = new URL(urlStr);
        const ext = url.pathname.split('.').pop()?.toLowerCase();
        if (!ext) return false;
        return IMAGE_EXTENSIONS.includes(ext);
    } catch {
        return false;
    }
};