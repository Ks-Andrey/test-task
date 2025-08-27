import type { InventoryItem } from "@entities/InventoryItem";
import { NAME_REQUIRED, ICON_INVALID_IMAGE, ICON_INVALID_CHAR_OR_URL, WEIGHT_MIN, QUANTITY_MIN } from '../model/constants';
import { isImageUrl } from "@entities/InventoryItem/utils/isImageUrl";

export const validateItem = (data: Omit<InventoryItem, 'id'>): { valid: boolean; error?: string } => {
  const { name, icon = '📦', weight, quantity } = data;

  if (!name.trim()) return { valid: false, error: NAME_REQUIRED };

  if (icon.length > 1) {
    try {
      if (!isImageUrl(icon)) {
        return { valid: false, error: ICON_INVALID_IMAGE };
      }
    } catch {
      return { valid: false, error: ICON_INVALID_CHAR_OR_URL };
    }
  }

  if (weight < 0) return { valid: false, error: WEIGHT_MIN };
  if (quantity < 1) return { valid: false, error: QUANTITY_MIN };

  return { valid: true };
};
