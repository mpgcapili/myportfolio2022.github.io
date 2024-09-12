import React from "react";

import { useParams } from "react-router-dom";
import Adminui from "./Projects/Adminui";
import Designimport from "./Projects/Designimport";
import Foundry from "./Projects/Foundry";
import Qsmobile from "./Projects/Qsmobile";
import Quickstart from "./Projects/Quickstart";
import PersonalArtwork from "./Projects/PersonalArtwork";
import ErrorPage from "./ErrorPage";

export const Display = () => {

    let project = useParams();
    const projectID = project.project

    switch (projectID) {
        case 'adminui':
            return <Adminui />
        case 'designimport':
            return <Designimport />
        case 'quickstart':
            return <Quickstart />
        case 'qsmobile':
            return <Qsmobile />
        case 'personalartwork':
            return <PersonalArtwork />

        default:
            return <ErrorPage />

    }
}

//es6 no return statement because after the => its assume that the fucntion will return it
const ProjectPage = () => {

    return (
        <>
            <div className="flex justify-center ">
                <div className=" mx-5
            sm:max-w-4xl 
            ">
                    <Display />
                </div>
            </div>
        </>
    )
}



export default ProjectPage;