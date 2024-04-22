module.exports = {
  apps: [
    {
      name: "Foor Land",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
