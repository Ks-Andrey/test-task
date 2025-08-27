import react from '@vitejs/plugin-react'
import path from 'node:path';
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve : { 
    alias : { 
      "@shared": path.resolve ( __dirname, "src/shared" ),
      "@entities": path.resolve ( __dirname, "src/entities" ),
      "@features": path.resolve ( __dirname, "src/features" ),
      "@widgets": path.resolve ( __dirname, "src/widgets" ),
      "@pages": path.resolve ( __dirname, "src/pages" ),
      "@app": path.resolve ( __dirname, "src/app" ),
    } 
  },
})
