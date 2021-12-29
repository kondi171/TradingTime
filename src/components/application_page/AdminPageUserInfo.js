import React from 'react';
const AdminPageUserInfo = ({
  id,
  firstName,
  lastName,
  login,
  onClickHandler,
}) => {
  const handleOnClick = () => onClickHandler({ id, type: 'FETCH' });

  return (
    <div className='user-info' onClick={handleOnClick}>
      <p className='personal-data'>
        {firstName} {lastName}
      </p>
      <p className='user-login'>Login: {login}</p>
    </div>
  );
};

export default AdminPageUserInfo;
