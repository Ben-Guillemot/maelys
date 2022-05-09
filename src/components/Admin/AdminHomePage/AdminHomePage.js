import React from 'react';
import AdminMain from '../AdminMain/AdminMain';
import './adminhomepage.scss';

function AdminHomePage() {
  return (
    <AdminMain>
      <p>Admin hompage</p>
    </AdminMain>
  );
}

AdminHomePage.propTypes = {
};
AdminHomePage.defaultProps = {
};
export default React.memo(AdminHomePage);
