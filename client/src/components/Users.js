import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UsersTable from './UsersTable';
import AddUser from './AddUser';
import EditUser from './EditUser';

export const Users = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <UsersTable />
                </div>
                <div className="col-md-6">
                    <AddUser />
                </div>
                <EditUser />
            </div>
        </div>
    );
};

Users.propTypes = {

}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);