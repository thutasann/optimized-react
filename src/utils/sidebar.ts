interface SideBarProps {
  link: string
  name: string
  isIndex?: boolean
}

export const SideBarData: SideBarProps[] = [
  {
    link: '/',
    name: 'Optimized React',
    isIndex: true,
  },
  {
    link: '/use-memo',
    name: 'Use Memo',
  },
]
