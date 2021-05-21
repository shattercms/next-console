import { FC, useCallback, useState } from 'react';
import classes from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';
import { groups } from './data';
import SidebarHeader from './SidebarHeader';

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <nav
      className={
        classes['sidebar'] + (collapsed ? ` ${classes['collapsed']}` : '')
      }
    >
      <SidebarHeader toggleCollapsed={toggleCollapsed} />
      {groups.map((group, groupIndex) => (
        <ul
          className={
            classes['sidebar__items'] +
            (group.bottom ? ' ' + classes['bottom'] : '') +
            (group.seperator ? ' ' + classes['seperator'] : '')
          }
          key={groupIndex}
        >
          {group.items.map((item, itemIndex) => (
            <SidebarItem {...item} key={itemIndex} />
          ))}
        </ul>
      ))}
    </nav>
  );
};
export default Sidebar;
