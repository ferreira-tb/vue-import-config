import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

export interface ConfigOptions {
  dts?: string;
  dirs?: string[];
  primevue?: boolean;
}

function defineConfig(options: ConfigOptions = {}) {
  const config: Record<string, any> = {
    dts: options.dts ?? './types/components.d.ts',
    dirs: ['./src/components', ...(options.dirs ?? [])],
    extensions: ['vue'],
    deep: true,
    version: 3
  };

  if (options.primevue) {
    config.resolvers = [PrimeVueResolver({ prefix: 'P' })];
  }

  return config;
}

export default defineConfig;
