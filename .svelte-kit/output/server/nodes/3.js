import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.BOGkGy9k.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DjHL27yY.js"];
export const stylesheets = ["_app/immutable/assets/3.DlRf73ur.css"];
export const fonts = [];
