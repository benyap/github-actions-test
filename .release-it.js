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
    commitMessage: "release: ${version}",
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      preset: {
        name: "conventionalcommits",
        types: [
          { type: "release", section: "Releases" },
          { type: "feat", section: "Features" },
          { type: "fix", section: "Bug Fixes" },
          { type: "docs", section: "Documentation" },
          { type: "tooling", section: "Tooling" },
          { type: "chore", section: "Internal" },
          { type: "deps", section: "Dependencies" },
          { type: "revert", section: "Reverts" },
        ],
      },
    },
  },
};
