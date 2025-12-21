// app/fonts.ts
import { Inter, Poppins, Cairo, Tajawal } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
});
