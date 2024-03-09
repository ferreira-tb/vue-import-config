export interface ConfigOptions {
  dts?: string;
  globs?: string[];
}

function config(options: ConfigOptions = {}) {
  return {
    dts: options.dts ?? './types/components.d.ts',
    globs: ['src/components/*.{vue}', ...(options.globs ?? [])],
    deep: true,
    version: 3
  };
}

export default config;
