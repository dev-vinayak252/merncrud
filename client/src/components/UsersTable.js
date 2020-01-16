import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../actions/usersAction';
import UserCard from './UserCard';

export const UsersTable = ({user: { users, errors }, getUsers}) => {

    useEffect(()=>{
        getUsers();
    }, [getUsers]);

    return (
        <table className="table table-striped table-hover table-dark">
            <thead>
                <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col" colSpan="2" style={{textAlign: "center"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <UserCard key={ user._id } userdata={ user } />)}
            </tbody>
        </table>
    );
};

UsersTable.propTypes = {
    user: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = {
    getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);