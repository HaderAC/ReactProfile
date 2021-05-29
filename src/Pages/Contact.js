import React from 'react';

const Contact = () => {
    return (
        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter Email"/>
            <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Phone number</label>
            <input type="tel" className="form-control" id="exampleInputPassword1" placeholder="Phone Number"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Send me a message!</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
};

export default Contact;