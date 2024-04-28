import * as universal from '../entries/pages/commands/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/commands/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/commands/+page.js";
export const imports = ["_app/immutable/nodes/4.DJpdFAg4.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DjHL27yY.js"];
export const stylesheets = ["_app/immutable/assets/4.CG4ycvaC.css"];
export const fonts = [];
