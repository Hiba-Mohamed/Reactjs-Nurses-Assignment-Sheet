export default {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/main.js'),
          index: resolve(__dirname, 'src/index.html'),
        },
      },
    },
  };