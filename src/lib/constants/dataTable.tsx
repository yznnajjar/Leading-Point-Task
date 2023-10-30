import { ReactNode } from 'react';
import { Image, Space, Checkbox } from 'antd';
import { CalendarOutlined, EllipsisOutlined, ArrowUpOutlined } from '@ant-design/icons';
// Components
import CustomTag from 'components/Tag';
// Constants
import { BADGE_NAME_AND_COLOR } from 'lib/constants/constants';

const data: Array<{
  key: string;
  projectName: ReactNode;
  projectStatus: ReactNode;
  brand: ReactNode;
  contributors: ReactNode;
  projectType: ReactNode;
  dueDate: ReactNode;
  actions: ReactNode;
}> = [
  {
    key: '1',
    projectName: 'Maimi development',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.CANCELLED} />,
    brand: <Image src='tesla.svg' alt='Tesla' />,
    contributors: <Image src='twoAvatar.svg' />,

    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.NEW_BUILD} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Thu 12</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '2',
    projectName: 'rague apartmen',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_REVIEW} />,
    brand: <Image src='nike.svg' alt='nike' />,
    contributors: <Image src='fourAvatar.svg' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.NEW_BUILD} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Thu 12</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '3',
    projectName: 'Czech redevelopment',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_PROGRESS} />,
    brand: <Image src='sony.svg' alt='sony' />,
    contributors: <Image src='twoAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.COMMERCIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Wed 10</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '4',
    projectName: 'Paris apartment blocks',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_PROGRESS} />,
    brand: <Image src='apple.svg' alt='apple' />,
    contributors: <Image src='fiveAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.RESIDENTIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Tue 03</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '5',
    projectName: 'India corporate property',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_REVIEW} />,
    brand: <Image src='apple.svg' alt='apple' />,
    contributors: <Image src='twoAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.COMMERCIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Mon 15</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '7',
    projectName: 'New Delhi commecial',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_REVIEW} />,
    brand: <Image src='nike.svg' alt='nike' />,
    contributors: <Image src='threeAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.COMMERCIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Thu 21</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '8',
    projectName: 'Mumbai residential',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_PROGRESS} />,
    brand: <Image src='sony.svg' alt='sony' />,
    contributors: <Image src='twoAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.RESIDENTIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Wed 20</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '9',
    projectName: 'South Korean infrastruture',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_REVIEW} />,
    brand: <Image src='apple.svg' alt='apple' />,
    contributors: <Image src='fourAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.RECONSTRUCTION} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Mon 04</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '10',
    projectName: 'Moscow appartment',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_REVIEW} />,
    brand: <Image src='rebook.svg' alt='rebook' />,
    contributors: <Image src='twoAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.RESIDENTIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Sat 13</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '11',
    projectName: 'Saint Petersburg office',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.APPROVED} />,
    brand: <Image src='sony.svg' alt='sony' />,
    contributors: <Image src='fiveAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.RESIDENTIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Sat 13</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '12',
    projectName: 'London apartments 2022',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_REVIEW} />,
    brand: <Image src='sony.svg' alt='sony' />,
    contributors: <Image src='twoAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.RESIDENTIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Fri 12</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '13',
    projectName: 'Kings Road townhouse',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_REVIEW} />,
    brand: <Image src='tesla.svg' alt='tesla' />,
    contributors: <Image src='fourAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.COMMERCIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Sun 02</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '13',
    projectName: 'Kings Road offices',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.APPROVED} />,
    brand: <Image src='tesla.svg' alt='tesla' />,
    contributors: <Image src='threeAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.COMMERCIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Thu 26</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '14',
    projectName: 'Old Streen maisonetter',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.APPROVED} />,
    brand: <Image src='sony.svg' alt='sony' />,
    contributors: <Image src='threeAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.NEW_BUILD} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Fri 02</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '15',
    projectName: 'Maimi development',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.APPROVED} />,
    brand: <Image src='sony.svg' alt='sony' />,
    contributors: <Image src='twoAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.NEW_BUILD} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Thu 01</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  },
  {
    key: '15',
    projectName: 'New York highrises ',
    projectStatus: <CustomTag info={BADGE_NAME_AND_COLOR.IN_PROGRESS} />,
    brand: <Image src='sony.svg' alt='sony' />,
    contributors: <Image src='twoAvatar.svg' alt='contributors' />,
    projectType: <CustomTag info={BADGE_NAME_AND_COLOR.COMMERCIAL} />,

    dueDate: (
      <Space>
        <CalendarOutlined />
        <span>Sub 02</span>
      </Space>
    ),
    actions: <EllipsisOutlined />
  }
];

const columns: Array<{
  title: string | ReactNode;
  dataIndex: string;
  key: string;
  sorter?: any,
  customSorterIcons?: ReactNode,
  render?: (text?: any) => any;
}> = [
  {
    title: <Checkbox />,
    dataIndex: 'selected',
    key: 'selected',
    render: () => <Checkbox />
  },
  {
    title: (
      <span>Project Name <ArrowUpOutlined
        style={{ color: 'var(--color-gray-9)', marginInlineStart: '1rem', cursor: 'pointer' }}
      /></span>),
    dataIndex: 'projectName',
    key: 'projectName',
    render: (text: string)  => {
      return (
        <span><Image src='folder-shared.svg' /> {'  '} {text}</span>
      );
    }
  },
  {
    title: 'Project Status',
    dataIndex: 'projectStatus',
    key: 'projectStatus'
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand'
  },
  {
    title: 'contributors',
    dataIndex: 'contributors',
    key: 'contributors'
  },
  {
    title: 'Project Type',
    dataIndex: 'projectType',
    key: 'projectType'
    // render: (text) => <CustomTag/>,
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions'
  }
];

export {
  data,
  columns
};
