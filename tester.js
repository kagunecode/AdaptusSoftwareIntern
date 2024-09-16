const tasks = require("./tasks");

const resources = {
  _debug: (stack) => {
    console.error("DEBUG:", stack);
  },
};

const input = {
  files: ["file1", "file2", "file3", "file4", "file5"],
  scanned_files: ["file1", "file4"],
  errored_files: ["file3"],
};

(async () => {
  try {
    const modInstance = tasks(resources);
    const result = await modInstance.run(input);
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
