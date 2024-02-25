import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './AdminClientModal.css';


function AdminProjectModal({ closeModal, defaultValues }) {

    const dispatch = useDispatch();

        let [project, setProject] = useState(defaultValues || { name: "", description: "", media: "", service: "", contract_status: "", from_language: "", to_language: "" });

    const handleChangeFor = (key, value) => {
        setProject({ ...project, [key]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (defaultValues === null) {
            dispatch({ type: 'ADD_PROJECT', payload: project });
            console.log("Sent client information to server");
        } else {
            dispatch({ type: "UPDATE_PROJECT", payload: project });
            console.log("Updated client information on server", project);
        }
        setProject({ client_id: "", description: "", due_at: "", status: "", translator_status: "", proofreader_status: "", flagged: "" });
        closeModal();
    };

    return (
        <div className="modal-container" onClick={(e) => {
            if (e.target.className === "modal-container") closeModal();
        }}>
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="client_id">Client:</label>
                        <input
                            name="client_id"
                            type="text"
                            value={project.client_id}
                            onChange={(event) => handleChangeFor("client_id", event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            name="description"
                            type="text"
                            value={project.description}
                            onChange={(event) => handleChangeFor("description", event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="due_at">Due By:</label>
                        <input
                            name="media"
                            type="text"
                            value={project.due_at}
                            onChange={(event) => handleChangeFor("due_at", event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <input
                            name="status"
                            type="text"
                            value={project.status}
                            onChange={(event) => handleChangeFor("status", event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="translator_status">Translator Status:</label>
                        <input
                            name="translator_status"
                            type="text"
                            value={project.translator_status}
                            onChange={(event) => handleChangeFor("translator_status", event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="proofreader_status">Proofreader Status:</label>
                        <input
                            name="proofreader_status"
                            type="text"
                            value={project.proofreader_status}
                            onChange={(event) => handleChangeFor("proofreader_status", event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="flagged">Flagged:</label>
                        <input
                            name="flagged"
                            type="text"
                            value={project.flagged}
                            onChange={(event) => handleChangeFor("flagged", event.target.value)}
                        />
                    </div>
                    <button button className='btn btn_sizeSm' type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};


export default AdminProjectModal;