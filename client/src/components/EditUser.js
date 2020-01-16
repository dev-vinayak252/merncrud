import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../actions/usersAction';

export const EditUser = ({ user: { currentUser }, updateUser }) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    useEffect(() => {
        setFirstName(currentUser ? currentUser.firstName : '');
        setLastName(currentUser ? currentUser.lastName : '');
    }, [currentUser]);

    const onUpdate = () => {
        const dataToUpdate = {
            _id: currentUser._id,
            firstName,
            lastName
        }
        updateUser(dataToUpdate);
        setFirstName('');
        setLastName('');       
    };

    return (
        <div className="modal fade" id="updateUserModal" tabIndex="-1" role="dialog" aria-labelledby="updateUserModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="updateUserModalLabel">Update User Data: </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="updFirstName">First Name</label>
                                <input type="text" className="form-control" id="updFirstName" 
                                    value={ firstName } disabled={ currentUser ? false : true }
                                    onChange={(e)=>setFirstName(e.target.value)} 
                                    placeholder="Enter First Name" tabIndex="11" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="updLastName">Last Name</label>
                                <input type="text" className="form-control" id="updLastName" 
                                    value={ lastName } disabled={ currentUser ? false : true }
                                    onChange={(e)=>setLastName(e.target.value)} 
                                    placeholder="Enter Last Name" tabIndex="12" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        { currentUser ? 
                            <button type="button" className="btn btn-primary" onClick={onUpdate} tabIndex="13" data-dismiss="modal">Save changes</button>
                            :
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

EditUser.propTypes = {
    user: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = {
    updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);