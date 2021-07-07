import { useDebugValue, useState } from "react";
import MembersList from "./MembersList";

const CreateApp = () => {
    // Member
    const [id, setId] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [suffix, setSuffix] = useState('Mr');
    const [gender, setGender] = useState('Male');
    const [isHead] = useState(false);
    const [relation] = useState('');

    // List of Members
    const [membersList, setMembersList] = useState([]);

    // Save and Add Member to Members List
    const handleAddMember = (e) => {
        e.preventDefault();
        var member = { id, firstName, middleName, lastName, dob, suffix, gender, isHead, relation};
        setId(id+1);
        setMembersList([...membersList, member]);
    }

    const handleAddMembersDetails = (e) => {
        e.preventDefault();
        // console.log('Members list - ', membersList);
        // Create Relation Component and pass it as props
    }

    const resetForm = (e) => {
        e.preventDefault();
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setDob('');
        setSuffix('Mr');
        setGender('Male');
    }

    return(
        <div className="add-member">
            <h4 className="display-6 heading text-primary">Add Member</h4>
            <form role="form" id="register-form" className="col-md-3 mx-auto">
                <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text" className="form-control" id="firstName" autoComplete="off" required
                        value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="middleName">Middle name</label>
                    <input
                        type="text" className="form-control" id="middleName"
                        value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" autoComplete="off" required
                        value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" autoComplete="off" required
                        value={dob} onChange={(e) => setDob(e.target.value)}/>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="suffix">Suffix</label>
                        <select className="custom-select" id="suffix" value={suffix} onChange={(e) => setSuffix(e.target.value)} required>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                    </div>

                    <div className="col">
                        <label htmlFor="gender">Gender</label>
                        <select className="custom-select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div className="btn-group">
                    <button onClick={handleAddMember} type="submit" className="btn btn-outline-success" id="add-member">Add</button>
                    <button onClick={handleAddMembersDetails} className="btn btn-outline-primary" id="save-family" disabled={membersList.length>1}>Save & Next</button>
                    <button onClick={resetForm} className="btn btn-outline-danger">Reset</button>
                </div>

            </form>
            <MembersList membersList={membersList}/>
        </div>
    )
}

export default CreateApp;