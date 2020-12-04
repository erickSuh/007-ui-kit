export const mapToCssModules = (cssModule: Array<string | undefined> = []) => {
  if (!cssModule) return cssModule;

  return cssModule
    .filter((className: string | undefined) => !!className)
    .join(' ');
};
