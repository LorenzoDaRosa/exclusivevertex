export const ADDRESS = {
  street: "Rua Marechal Floriano, 555",
  unit: "Sala 804",
  district: "Centro",
  city: "Caxias do Sul · RS",
} as const;

export const ADDRESS_FULL =
  "Rua Marechal Floriano, 555 - Sala 804, Centro, Caxias do Sul - RS";

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_FULL,
)}`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_FULL,
)}&z=16&output=embed`;
