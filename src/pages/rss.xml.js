import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'DyLaNHurtado | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: 'https://blog-astro-dylan.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-ES</language>`,
  });
}