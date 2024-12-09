import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManageEvents.css"; // Optional CSS file for styling
import config from "../config";

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        eventName: "",
        eventDescription: "",
        eventVenue: "",
        speaker: "",
        guests: "",
        eventDate: "",
        eventPoster: null,
    });

    // Fetch events from the API
    const fetchEvents = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the token from localStorage
            console.log(token);
            
            const response = await axios.get(`${config.baseURL}/api/admin/events`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Add the token in the Authorization header
                },
            });
            setEvents(response.data);
        } catch (error) {
            console.error("Error fetching events:", error);
            alert("Failed to load events. Please try again later.");
        }
    };
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        setFormData({ ...formData, eventPoster: e.target.files[0] });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });
    
        try {
            const token = localStorage.getItem('authToken'); // Get the token from localStorage
            await axios.post(`${config.baseURL}/api/admin/events`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`, // Add the token in the Authorization header
                },
            });
            alert("Event added successfully");
            setFormData({
                eventName: "",
                eventDescription: "",
                eventVenue: "",
                speaker: "",
                guests: "",
                eventDate: "",
                eventPoster: null,
            });
            fetchEvents();
        } catch (error) {
            console.error("Error adding event:", error);
            alert("Failed to add event. Please try again.");
        }
    };
    // Handle event deletion
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('authToken'); // Get the token from localStorage
            await axios.delete(`${config.baseURL}/api/admin/events/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Add the token in the Authorization header
                },
            });
            alert("Event deleted successfully");
            fetchEvents();
        } catch (error) {
            console.error("Error deleting event:", error);
            alert("Failed to delete event. Please try again.");
        }
    };
    
    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="manage-events">
            <h1>Manage Events</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="eventName"
                    placeholder="Event Name"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="eventDescription"
                    placeholder="Event Description"
                    value={formData.eventDescription}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="eventVenue"
                    placeholder="Event Venue"
                    value={formData.eventVenue}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="speaker"
                    placeholder="Speaker"
                    value={formData.speaker}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="guests"
                    placeholder="Guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="file"
                    name="eventPoster"
                    onChange={handleFileChange}
                />
                <button type="submit">Add Event</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Venue</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td>{event.eventName}</td>
                            <td>{event.eventDescription}</td>
                            <td>{event.eventVenue}</td>
                            <td>{new Date(event.eventDate).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleDelete(event.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageEvents;
