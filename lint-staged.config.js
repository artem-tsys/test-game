module.exports = {
  '*.(ts|tsx)': 'npm run lint',
  '*.sass': 'stylelint ./src/**/*.sass --fix',
  '*.scss': 'stylelint ./src/**/*.scss --fix',
  '*.css': 'stylelint ./src/**/*.css --fix',
};
