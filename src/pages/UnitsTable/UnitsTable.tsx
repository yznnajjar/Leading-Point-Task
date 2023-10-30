import { FC } from 'react';
import { Table, Button, Input } from 'antd';
import { columns, data } from 'lib/constants/dataTable';

// Style
import './UnitsTable.scss';
import { ANOTHER_FILTER_BUTTONS, FILTER_BUTTONS } from '../../lib/constants/constants.ts';
import { SearchOutlined } from '@ant-design/icons';
import TopBar from '../../components/TopBar';

interface FilterButton {
  name: string;
  icon: string;
}

interface FilterButtonsProps {
  buttons: Record<string, FilterButton>;
}

const FilterButtons: FC<FilterButtonsProps> = ({ buttons }) => {
  return Object.values(buttons).map((item) => {
    const isFieldShouldAdd = item.name === FILTER_BUTTONS.SORT_PROJECTS.name;

    return (
      <>
        <Button>
          {item.name}
          <img src={item.icon} alt={''} />
        </Button>

        {isFieldShouldAdd && (
          <div className={'search-field'}>
            <Input
              placeholder="Try 'Miami brachhouse'"
              suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </div>
        )}
      </>
    );
  });
};
const UnitsTable = () => {
  return (
    <div className={'unit-table__container'}>
      <TopBar title={"Current Project"} isNewProject/>
      {/* Filter Buttons */}
      <div className='filter--buttons'>
        <div>
        <FilterButtons buttons={FILTER_BUTTONS}/>
        </div>
        <div>
        <FilterButtons buttons={ANOTHER_FILTER_BUTTONS}/>
        </div>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} className='table' />
    </div>
  );
};

export default UnitsTable;
