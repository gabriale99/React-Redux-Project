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
        url: BASE_URL + 'Components/AvatarDemo',
        icon: 'NavigateNext'
      },
      {
        label: 'Button',
        url: BASE_URL + 'Components/ButtonDemo',
        icon: 'NavigateNext'
      },
      {
        label: 'Chip',
        url: BASE_URL + 'Components/ChipDemo',
        icon: 'NavigateNext'
      },
      {
        label: 'Dialog',
        url: BASE_URL + 'Components/DialogDemo',
        icon: 'NavigateNext'
      },
      {
        label: 'Expansion Panel',
        url: BASE_URL + 'Components/ExpandPanel',
        icon: 'NavigateNext'
      },
      {
        label: 'Info Card',
        url: BASE_URL + 'Components/InfoCard',
        icon: 'NavigateNext'
      },
      {
        label: 'Markdown',
        url: BASE_URL + 'Components/Markdown',
        icon: 'NavigateNext'
      },
      {
        label: 'Nested List',
        url: BASE_URL + 'Components/NestedList',
        icon: 'NavigateNext'
      },
      {
        label: 'Notification',
        url: BASE_URL + 'Components/Notification',
        icon: 'NavigateNext'

      },
      {
        label: 'Progress',
        url: BASE_URL + 'Components/Progress',
        icon: 'NavigateNext'
      },
      {
        label: 'Table',
        url: BASE_URL + 'Components/Table',
        icon: 'NavigateNext'
      },
      {
        label: 'Tabs',
        url: BASE_URL + 'Components/Tabs',
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
        url: BASE_URL + 'Charts/LineMark',
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
    label: "Contributor",
    url: "https://github.com/gabriale99"
  },
  {
    label: "React",
    url: "https://reactjs.org/"
  },
  {
    label: "Material-UI",
    url: "https://material-ui.com/"
  },
  {
    label: "React-vis",
    url: "https://uber.github.io/react-vis/"
  }
]

export default { menuContent, navBarContent }