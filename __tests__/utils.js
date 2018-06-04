export function isInstalled(localVue, plugin) {
  return !!localVue._installedPlugins
    .find(installedPlugin => installedPlugin.name === plugin.name);
}
