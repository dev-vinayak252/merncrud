import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser, setCurrent } from '../actions/usersAction';

export const UserCard = ({ userdata: { _id, firstName, lastName }, deleteUser, setCurrent }) => {

    return (
        <tr>
            {/* <th scope="row">{ _id }</th> */}
            <th scope="row">{ firstName }</th>
            <td>{ lastName }</td>
            <td><input type="button" value="Edit" className="btn btn-success btn-block" 
                onClick={()=>setCurrent({ _id, firstName, lastName })} 
                data-toggle="modal" data-target="#updateUserModal" /></td>
            <td><input type="button" value="Delete" className="btn btn-danger btn-block" onClick={()=>deleteUser(_id)} /></td>
        </tr>
    );
};

UserCard.propTypes = {
    userdata: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    deleteUser, setCurrent
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);