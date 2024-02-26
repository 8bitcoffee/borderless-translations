import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AdminclientModal.css';
import { Stack, Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';


function AdminClientModal({ closeModal, defaultValues }) {

    const dispatch = useDispatch();

    const timezoneList = [
        { id: 1, tz: "UTC -11:00 - American Samoa" },
        { id: 2, tz: "UTC -10:00 - Honolulu" },
        { id: 3, tz: "UTC -9:00 - Anchorage" },
        { id: 4, tz: "UTC -8:00 - Los Angeles" },
        { id: 5, tz: "UTC -7:00 - Denver" },
        { id: 6, tz: "UTC -6:00 - Chicago" },
        { id: 7, tz: "UTC -5:00 - New York" },
        { id: 8, tz: "UTC -4:00 - Halifax" },
        { id: 9, tz: "UTC -3:00 - Rio de Janeiro" },
        { id: 10, tz: "UTC -2:00 - Ponta Delgada" },
        { id: 11, tz: "UTC -1:00 - Reykjavik" },
        { id: 13, tz: "UTC 0:00 - London" },
        { id: 14, tz: "UTC +1:00 - Paris" },
        { id: 15, tz: "UTC +2:00 - Helsinki" },
        { id: 16, tz: "UTC +3:00 - Moscow" },
        { id: 17, tz: "UTC +4:00 - Dubai" },
        { id: 18, tz: "UTC +5:00 - Karachi" },
        { id: 19, tz: "UTC +6:00 - Dhaka" },
        { id: 20, tz: "UTC +7:00 - Bangkok" },
        { id: 21, tz: "UTC +8:00 - Beijing" },
        { id: 22, tz: "UTC +9:00 - Tokyo" },
        { id: 23, tz: "UTC +10:00 - Brisbane" },
        { id: 24, tz: "UTC +11:00 - Sydney" },
        { id: 25, tz: "UTC +12:00 - Tarawa" },
        { id: 26, tz: "UTC +13:00 - Auckland" }];

    let [client, setClient] = useState(defaultValues || { id: "", client: "", contact: "", country: "", timezone: "", location: "", email: "", phone: "", client_notes: "" });

    const handleChangeFor = (key, value) => {
        setClient({ ...client, [key]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (defaultValues === null) {
            dispatch({ type: 'CREATE_NEW_CLIENT', payload: client });
            console.log("Sent client information to server", client);
        } else {
            dispatch({ type: "UPDATE_CLIENT", payload: client });
            console.log("Updated client information on server", client);
        }
        setClient({ id: "", client: "", contact: "", country: "", timezone: "", location: "", email: "", phone: "", client_notes: "" });
        closeModal();
    };

    return (
        <div className="modal-container" onClick={(e) => {
            if (e.target.className === "modal-container") closeModal();
        }}>
            <div className="modal">

                <form onSubmit={handleSubmit}>
                    <Stack direction="column" justifyContent="flex-end">
                        <TextField
                            label="Client Name"
                            sx={{ width: '400px', margin: '20px 0' }}
                            value={client.client}
                            onChange={(event) => handleChangeFor("client", event.target.value)}
                        />
                        <TextField
                            label="Contact"
                            sx={{ width: '400px', margin: '20px 0' }}
                            value={client.contact}
                            onChange={(event) => handleChangeFor("contact", event.target.value)}
                        />

                        <TextField
                            label="country"
                            sx={{ width: '400px', margin: '20px 0' }}
                            value={client.country}
                            onChange={(event) => handleChangeFor("country", event.target.value)}
                        />

                        <TextField
                            label="location"
                            sx={{ width: '400px', margin: '20px 0' }}
                            value={client.location}
                            onChange={(event) => handleChangeFor("location", event.target.value)}
                        />
                        <FormControl sx={{ width: '400px', margin: '20px 0' }}>
                            <InputLabel id="timezone-select">Timezone</InputLabel>
                            <Select
                                labelId="timezone-select"
                                label="Timezone"
                                value={client.timezone}
                                onChange={(event) => handleChangeFor("timezone", event.target.value)}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {timezoneList.map((timezone) => (
                                    <MenuItem key={timezone.tz} value={timezone.tz}>{timezone.tz}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            label="email"
                            sx={{ width: '400px', margin: '20px 0' }}
                            value={client.email}
                            onChange={(event) => handleChangeFor("email", event.target.value)}
                        />

                        <TextField
                            label="phone"
                            sx={{ width: '400px', margin: '20px 0' }}
                            value={client.phone}
                            onChange={(event) => handleChangeFor("phone", event.target.value)}
                        />
                        <TextField
                            label="client_notes"
                            sx={{ width: '400px', margin: '20px 0' }}
                            value={client.client_notes}
                            onChange={(event) => handleChangeFor("client_notes", event.target.value)}
                        />


                        <button className='btn btn_sizeSm' type="submit">Save</button>
                    </Stack>
                </form>
            </div>
        </div >
    );
};

export default AdminClientModal;