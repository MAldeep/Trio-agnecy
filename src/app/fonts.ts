// app/fonts.ts
import { Inter, Poppins, Cairo, Aref_Ruqaa } from "next/font/google";

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

export const aref = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
});
