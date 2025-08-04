import type { SiteConfig } from '$lib/types/site'


export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'shellkaitw.github.io',
  title: "Shellkai",
  subtitle: "If it works, don't touch it.",
  lang: 'zh-TW',
  description: 'Copyright © ShellkaiTW 2025 - All right reserved\tPowered by SvelteKit/Urara',
  author: {
    avatar: '/assets/profile.jpg',
    name: 'Shellkai Huang',
    status: '👾',
    bio: 'SAIHS ➔ NTUT<br />主攻網路規劃及伺服器架設，也喜歡 Android 刷機及 Root，希望有一天能搭建屬於自己的 HomeLab<br />#NSC #Skills39 #Skills54',
    // pnpm install @iconify-json/simple-icons
    metadata: [
      {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/ShellkaiTW'
      },
      {
        icon: 'i-simple-icons-instagram',
        link: 'https://instagram.com/shellkai__2006'
      },
      {
        icon: 'i-simple-icons-osu',
        link: 'https://osu.ppy.sh/users/26015973'
      }
    ]
  },
  themeColor: '#3D4451'
}
