import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

export interface ConfigOptions {
  dts?: string;
  dirs?: string[];
  primevue?: boolean;
}

function config(options: ConfigOptions = {}) {
  return {
    dts: options.dts ?? './types/components.d.ts',
    dirs: ['./src/components', ...(options.dirs ?? [])],
    extensions: ['vue'],
    deep: true,
    version: 3,
    resolvers: [options.primevue && PrimeVueResolver({ prefix: 'p' })]
  };
}

export default config;
