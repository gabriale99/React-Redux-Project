const BASE_URL = '/';

const navBarContent = [
  {
    label: 'Home',
    url: BASE_URL,
    icon: 'Home'

  },
  {
    label: 'Colors',
    url: BASE_URL + 'Colors',
    icon: 'Palette'

  },
  {
    label: 'Components',
    icon: 'Widgets',
    subNavItems: [
      {
        label: 'Avatar',
        url: BASE_URL + 'Components/Avatar',
        icon: 'NavigateNext'

      },
      {
        label: 'Button',
        url: BASE_URL + 'components/button',
        icon: 'NavigateNext'

      },
      {
        label: 'Chips',
        url: BASE_URL + 'components/chips',
        icon: 'NavigateNext'

      },
      {
        label: 'Dialog',
        url: BASE_URL + 'components/dialog',
        icon: 'NavigateNext'

      },
      {
        label: 'Expend Panel',
        url: BASE_URL + 'components/panel',
        icon: 'NavigateNext'
      },
      {
        label: 'Info Card',
        url: BASE_URL + 'components/infocard',
        icon: 'NavigateNext'

      },
      {
        label: 'Markdown',
        url: BASE_URL + 'components/markdown',
        icon: 'NavigateNext'

      },
      {
        label: 'Nested List',
        url: BASE_URL + 'components/nestedlist',
        icon: 'NavigateNext'
      },
      {
        label: 'Notification',
        url: BASE_URL + 'components/notification',
        icon: 'NavigateNext'

      },
      {
        label: 'Progress',
        url: BASE_URL + 'components/progress',
        icon: 'NavigateNext'

      },
      {
        label: 'Search Field',
        url: BASE_URL + 'components/searchfield',
        icon: 'NavigateNext'
      },
      {
        label: 'Spinner',
        url: BASE_URL + 'components/spinner',
        icon: 'NavigateNext'

      },
      {
        label: 'Table',
        url: BASE_URL + 'components/table',
        icon: 'NavigateNext'

      },
      {
        label: 'Tabs',
        url: BASE_URL + 'components/tabs',
        icon: 'NavigateNext'

      },
    ]
  },
  {
    label: 'Charts',
    icon: 'Timeline',
    subNavItems: [
      {
        label: 'Area',
        url: BASE_URL + 'Charts/Area',
        icon: 'NavigateNext'

      },
      {
        label: 'Circular Grid Line',
        url: BASE_URL + 'Charts/CircularGridLine',
        icon: 'NavigateNext'

      },
      {
        label: 'Heatmap',
        url: BASE_URL + 'Charts/HeatMap',
        icon: 'NavigateNext'

      },
      {
        label: 'Bar',
        url: BASE_URL + 'Charts/Bar',
        icon: 'NavigateNext'

      },
      {
        label: 'Line',
        url: BASE_URL + 'Charts/Line',
        icon: 'NavigateNext'

      },
      {
        label: 'LineMark',
        url: BASE_URL + 'Charts/Linemark',
        icon: 'NavigateNext'
      },
      {
        label: 'Pie',
        url: BASE_URL + 'Charts/Pie',
        icon: 'NavigateNext'

      },
      {
        label: 'Scatter Plot',
        url: BASE_URL + 'Charts/ScatterPlot',
        icon: 'NavigateNext'

      },
      {
        label: 'Stacked Bar',
        url: BASE_URL + 'Charts/StackedBar',
        icon: 'NavigateNext'

      },
    ]
  },
  {
    label: 'Iconography',
    url: BASE_URL + 'Iconography',
    icon: 'BlurOn'

  }
];

const menuContent = [
  {
    label: "Profile",
    url: "https://github.com/gabriale99"
  },
  {
    label: "Stylus",
    url: "http://stylus-lang.com/"
  }
]

export default { menuContent, navBarContent }