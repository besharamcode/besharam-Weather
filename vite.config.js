import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
// export default defineConfig({

// });


export default defineConfig({
  plugins: [react()]
},
  ({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})