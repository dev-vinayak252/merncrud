import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../actions/usersAction';

export const AddUser = ({ addUser }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = { firstName, lastName };
        addUser(userData);
        setFirstName('');
        setLastName('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" 
                    value={ firstName } 
                    onChange={(e)=>setFirstName(e.target.value)} 
                    placeholder="Enter First Name" tabIndex="1" />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" 
                    value={ lastName } 
                    onChange={(e)=>setLastName(e.target.value)} 
                    placeholder="Enter Last Name" tabIndex="2" />
            </div>

            <button type="submit" className="btn btn-primary btn-block" tabIndex="0">Add User</button>
        </form>
    );
};

AddUser.propTypes = {
    addUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);