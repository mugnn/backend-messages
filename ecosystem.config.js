module.exports = {
  apps : [{
    name: "glost_server",
    script: 'src/server.ts',
    interpreter: 'node',
    interpreter_args: '--require sucrase/register',
    watch: ['src'],
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};