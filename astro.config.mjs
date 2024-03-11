import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '魔兽爱好者',
			defaultLocale: 'root', // 可选
			locales: {
				root: {
				label: '简体中文',
				lang: 'zh-CN',
				},
			},
			social: {
				github: 'https://github.com/wowfans',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
