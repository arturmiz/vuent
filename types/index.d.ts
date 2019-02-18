declare module 'vuent' {
  import { PluginFunction, PluginObject, Component } from 'vue';

  export interface VuentUseOptions {
    components?: Array<Component>,
    accentColor?: string,
  }

  export interface Vuent {
    install: PluginFunction<VuentUseOptions>
  }

  const Vuent: Vuent;

  export default Vuent;
}

declare module 'vuent/components' {
  import { Component } from 'vue';

  const VntAutosuggest: Component;
  const VntButton: Component;
  const VntCheckbox: Component;
  const VntDialog: Component;
  const VntHeader: Component;
  const VntInput: Component;
  const VntLink: Component;
  const VntRadio: Component;
  const VntRating: Component;
  const VntSelect: Component;
  const VntSlider: Component;
  const VntTabs: Component;
  const VntToggle: Component;

  export {
    VntAutosuggest,
    VntButton,
    VntCheckbox,
    VntDialog,
    VntHeader,
    VntInput,
    VntLink,
    VntRadio,
    VntRating,
    VntSelect,
    VntSlider,
    VntTabs,
    VntToggle,
  };
}

declare module 'vue/types/vue' {
  import Vue from 'vue';

  export interface VuentObject extends Vue {
    setAccentColor(color: string): void
  }

  export interface Vue {
    $vuent: VuentObject
  }

}
