const whatsappPhoneNumber = "529842467762";

export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;
}
