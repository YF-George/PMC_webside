import * as universal from '../entries/pages/login/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/login/+page.js";
export const imports = ["_app/immutable/nodes/5.BTEbsmUG.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DjHL27yY.js"];
export const stylesheets = ["_app/immutable/assets/5.BL5YOBZE.css"];
export const fonts = [];
