export function isInstalled(localVue, plugin) {
  return !!localVue._installedPlugins
    .find(installedPlugin => installedPlugin.name === plugin.name);
}

export function countInstalledPlugins(localVue) {
  return localVue._installedPlugins
    .filter(installedPlugin => !!installedPlugin.name).length;

}
