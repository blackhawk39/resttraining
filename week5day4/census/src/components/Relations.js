import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

const Relations = () => {
    // Use Location
    const location = useLocation();
    const [relations, setRelations] = useState(Array(location.state.membersList.length).fill('Father'));

    const handleAddRelations = (e) => {
        e.preventDefault();

        location.state.membersList.slice(1).map((m, index) => {
            m.relation = relations[index];
            m.isHead = false;
        });

        console.log(location.state.membersList);
        // Add API Call for post request
    }

    const handleOnRelationChange = (rel, index) => {
        const updatedRelationsArr = relations;
        updatedRelationsArr[index] = rel;
        setRelations(updatedRelationsArr);
    }

    return(
        <div>
            {
                location.state.membersList.length > 0 &&
                <div className="relations">
                    <span className="display-4 head-member">Please select your relations with head member :
                        {' ' + location.state.membersList[0].suffix + '.'+ location.state.membersList[0].lastName + ' ' +
                        location.state.membersList[0].firstName + ' ' + location.state.membersList[0].middleName}
                    </span>
                </div>
            }

            {
                location.state.membersList.length > 1 &&
                <div className="remaining-members container">
                    <form id="relations-form" className="col-md-4 mx-auto">
                        { location.state.membersList.slice(1).map((member, index) => (
                            <div className="form-group display-6" key={index+1}>
                                <div className="row">
                                    <label htmlFor="member-name">{' ' + member.suffix + '.'+ member.lastName + ' ' + member.firstName + ' ' + member.middleName}</label>
                                    <select className="custom-select" id="relation" onChange={(e) => handleOnRelationChange(e.target.value, index)} required>
                                        <option value="Father">Father</option>
                                        <option value="Mother">Mother</option>
                                        <option value="Wife">Wife</option>
                                        <option value="Son">Son</option>
                                        <option value="Daughter">Daughter</option>
                                    </select>
                                </div>
                            </div>
                        ))}

                        <div className="btn-group">
                            <button onClick={handleAddRelations} type="submit" className="btn btn-outline-success" id="add-relation">Submit</button>
                            <NavLink to="/"><button className="btn btn-outline-primary">Return</button></NavLink>
                        </div>
                    </form>
                </div>
            }

        </div>

    )
}

export default Relations;