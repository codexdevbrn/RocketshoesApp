import * as Localization from 'expo-localization';

export function formatPrice(price: number): string {
  return price.toLocaleString(Localization.locale,
    {
      style: 'currency',
      currency: Localization.locale
    });
}