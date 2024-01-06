import React from 'react'
import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <div> <div className="card" style={{width:" 18rem " }}>
    <img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">Name:{props.name}</h5>
        <h5 className="card-text">Roll no:{props.rollno}</h5>
        <h5 className="card-text">City:{props.city}</h5>
    </div>
</div></div>
  )
}
Student.propTypes={
    rollno: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

Student.defaultProps={
    rollno:1111,
    name:'Enter NAme Here',
    city:'Enter City Here'
}

export default Student