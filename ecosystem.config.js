module.exports = {
  apps: [
    {
      name: "shree-ganesh-traders",
      script: "npm",
      args: "start",
      cwd: "/root/shree-ganesh-traders",
      env: {
        NODE_ENV: "production",
        PORT: 7002
      }
    }
  ]
};
