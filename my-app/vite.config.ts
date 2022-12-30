import solid from "solid-start/vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
  
export default defineConfig(() => {
  return {
    plugins: [solid({ ssr: false }), UnoCSS()],
  };
});
  