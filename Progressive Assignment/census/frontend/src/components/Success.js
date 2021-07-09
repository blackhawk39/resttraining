import { useState } from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
    const location = useLocation();
    const [familyid, setFamilyId] = useState(location.state.familyid);
    // console.log(familyid);

    return(
        <>
        {
            <div className="navBar success container text-center mt-3">
                <p className="display-4 successHeader">Thank you for using our application</p>
                <p className="display-4 familyId"><span className="text-primary">Your Family ID : </span>{familyid}</p>
            </div>
        }
        </>
    )
}

export default Success;