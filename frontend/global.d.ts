declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module "*.css" {
  const classNames: { [className: string]: string };
  export default classNames;
}
