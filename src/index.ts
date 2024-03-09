export interface ConfigOptions {
  dts?: string;
  dirs?: string[];
}

function config(options: ConfigOptions = {}) {
  return {
    dts: options.dts ?? './types/components.d.ts',
    dirs: ['./src/components', ...(options.dirs ?? [])],
    extensions: ['vue'],
    deep: true,
    version: 3
  };
}

export default config;
