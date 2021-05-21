import { FC } from 'react';
import classes from './SidebarItem.module.scss';
import Link from 'next/link';

export interface Props {
  text: string;
  href: string;
  icon?: JSX.Element;
}

const SidebarItem: FC<Props> = ({ text, href, icon }) => {
  return (
    <li className={classes['sidebar-item']}>
      <Link href={href}>
        <a className={classes['sidebar-item__body']}>
          {icon}
          {text}
        </a>
      </Link>
    </li>
  );
};
export default SidebarItem;
