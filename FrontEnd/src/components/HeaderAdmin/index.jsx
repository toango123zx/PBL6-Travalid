import React, { useContext } from 'react';

import AvatarPopover from '../AvatarPopover';
import { APP_CONTEXT } from '../../App';

const HeaderAdmin = () => {
  const context = useContext(APP_CONTEXT);
  return (
    <header className="flex py-2 px-6 ">
      <div className="w-full flex justify-end items-center">
        <AvatarPopover user={context.user} />
      </div>
    </header>
  );
};

export default HeaderAdmin;
