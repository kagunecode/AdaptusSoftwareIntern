module.exports = {
  add: async (path, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Array.isArray(data) && data.length > 0) {
          resolve(`Upload done in path ${path}`);
        } else {
          reject(new Error("Failed to upload, invalid data"));
        }
      }, 2000);
    });
  },
};
