import { FC } from 'react';
import classes from './SidebarHeader.module.scss';
import Link from 'next/link';

interface Props {
  toggleCollapsed: () => void;
}

const SidebarHeader: FC<Props> = ({ toggleCollapsed }) => {
  return (
    <div className={classes['sidebar-header']}>
      <button
        className={classes['sidebar-header__toggle']}
        onClick={toggleCollapsed}
      >
        <svg viewBox="0 0 24 24">
          <path d="M4,18h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h8c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h11c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M20.3,14.88L17.42,12l2.88-2.88c0.39-0.39,0.39-1.02,0-1.41l0,0 c-0.39-0.39-1.02-0.39-1.41,0l-3.59,3.59c-0.39,0.39-0.39,1.02,0,1.41l3.59,3.59c0.39,0.39,1.02,0.39,1.41,0l0,0 C20.68,15.91,20.69,15.27,20.3,14.88z" />
        </svg>
      </button>
      <Link href="/">
        <a className={classes['sidebar-header__body']}>
          <svg
            viewBox="0 0 250 500"
            className={classes['sidebar-header__icon']}
          >
            <path d="M66.9544 369.137L123.103 200.692C123.71 198.869 126.29 198.869 126.897 200.692L183.046 369.137C184.243 372.73 183.308 376.692 180.63 379.37L128.536 431.464C126.583 433.417 123.417 433.417 121.464 431.464L69.3702 379.37C66.6918 376.692 65.7566 372.73 66.9544 369.137Z" />
            <path d="M248.046 369.137L125 0L233.45 369.714C234.415 373.005 233.627 376.561 231.361 379.135L125 500L245.63 379.37C248.308 376.692 249.243 372.73 248.046 369.137Z" />
            <path d="M1.95439 369.137L125 0L16.5505 369.714C15.5852 373.005 16.3735 376.561 18.639 379.135L125 500L4.37016 379.37C1.69183 376.692 0.756607 372.73 1.95439 369.137Z" />
          </svg>
          <p className={classes['sidebar-header__title']}>
            <strong>ShatterCMS</strong>
            <br />
            Admin Console
          </p>
        </a>
      </Link>
    </div>
  );
};
export default SidebarHeader;
