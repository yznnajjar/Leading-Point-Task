import { FC } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, BellOutlined, PlusOutlined } from '@ant-design/icons';
// Style
import './TopBar.scss';

interface TopBar {
  title: string;
  isFieldShow?: boolean;
  isNewProject?: boolean;
}


const TopBar: FC<TopBar> = ({ title, isFieldShow = false, isNewProject }) => {
  return (
    <div className='top-bar'>
      <h1>{title}</h1>

      <div className="icon__container">
        {isNewProject && (
          <Button>
            New Project
            <span>
            <PlusOutlined />
          </span>
          </Button>
        )}
        {!isFieldShow &&
          <div className='top-bar__icons'>
            <SearchOutlined className='icon' />
            <BellOutlined className='icon' />
          </div>
        }
      </div>

      {isFieldShow && (
        <div className='top-bar__search-field'>
          <Input
            placeholder="Try 'Miami brachhouse'"
            suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </div>
      )

      }


    </div>
  );
};

export default TopBar;
