module.exports = {
  github: {
    release: true,
    releaseName: "Release ${version}",
  },
  npm: {
    publish: false,
  },
  git: {
    tag: true,
    commit: true,
    commitMessage: "chore(release): release ${version}",
  },
};
