
import tailwind3dTransformPlugin from '@xpd/tailwind-3dtransforms'
import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwind3dTransformPlugin,
    flowbite.plugin()
  ],
}

