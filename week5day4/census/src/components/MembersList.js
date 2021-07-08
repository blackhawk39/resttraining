import React from 'react';

const MembersList = (props) => {

    const membersList = props.membersList;

    return(
        <div>
            {   membersList.length > 0 &&
                <table className="table table-bordered table-hover col-md-6">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Middle Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Suffix</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody id="membersTable-row">
                        { membersList.map((member) => (
                            <tr key={member.id}>
                                <th scope="row">{member.id}</th>
                                <td>{member.firstName}</td>
                                <td>{member.middleName ? member.middleName : '-'}</td>
                                <td>{member.lastName}</td>
                                <td>{member.dob}</td>
                                <td>{member.suffix}</td>
                                <td>{member.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default MembersList;