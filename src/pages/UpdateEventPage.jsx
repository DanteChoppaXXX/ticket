import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography, InputLabel, Input } from '@material-ui/core';

const initialEventDetails = {
    name: "Taylor Swift | The Eras Tour",
    title: "Verified Resale Ticket",
    image: 'path/to/tswift_image', // Update with correct image path
    user: "daniskascott@gmail.com",
    success: true,
    userName: "Daniska",
    clientName: "Buyer-name(buyer-email@gmail.com)",
    taxFee: 100,
    paid: true,
    tix: 2,
    date: "Thu, Nov 21, 7pm • Rogers Center",
    emailInfo: {
    date: "Thu • Nov 21, 2024 • 7:00 PM",
    location: "Rogers Center, Toronto, ON",
    },
    countdown: "08 15 2022, 08:00pm",
    seatMap: [
    {
        sec: "A3",
        row: "10",
        seat: "5",
    },
    {
        sec: "A3",
        row: "10",
        seat: "6",
    },
    ],
    };

    const UpdateEventPage = ({ onEventUpdate }) => {
    const [eventDetails, setEventDetails] = useState(initialEventDetails);
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Handle nested fields for emailInfo
        if (name.startsWith('emailInfo.')) {
            const key = name.split('.')[1];
            setEventDetails((prevDetails) => ({
            ...prevDetails,
            emailInfo: {
            ...prevDetails.emailInfo,
            [key]: value,
        },
        }));
        }

        if (name.includes('seatMap')) {
        const [_, index, field] = name.split('-');
        const updatedSeatMap = eventDetails.seatMap.map((seat, i) => (
            i === parseInt(index) ? { ...seat, [field]: value } : seat
        ));
        setEventDetails((prevDetails) => ({
            ...prevDetails,
            seatMap: updatedSeatMap,
        }));
        } else {
        setEventDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        }
    };

    const handleTixChange = (e) => {
        const tix = parseInt(e.target.value, 10);
        const updatedSeatMap = Array.from({ length: tix }, (_, i) => (
        eventDetails.seatMap[i] || { sec: '', row: '', seat: '' }
        ));
        setEventDetails((prevDetails) => ({
        ...prevDetails,
        tix,
        seatMap: updatedSeatMap,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEventDetails((prevDetails) => ({
                ...prevDetails,
                image: reader.result,
                }));
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            }
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEventUpdate(eventDetails); // Call the handler passed from App.js
    };

    return (
        <Container sx={{ height: '100vh', overflowY: 'auto', paddingTop: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
            Update Event Details
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
            fullWidth
            label="Event Name"
            name="name"
            value={eventDetails.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            <TextField
            fullWidth
            label="Title"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            
            <TextField
            fullWidth
            label="User Email"
            name="user"
            value={eventDetails.user}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            <TextField
            fullWidth
            label="Username"
            name="userName"
            value={eventDetails.userName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            <TextField
            fullWidth
            label="Client Name"
            name="clientName"
            value={eventDetails.clientName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            <TextField
            fullWidth
            label="Tax Fee"
            name="taxFee"
            type="number"
            value={eventDetails.taxFee}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            <TextField
            fullWidth
            label="Number of Tickets"
            name="tix"
            type="number"
            value={eventDetails.tix}
            onChange={handleTixChange}
            margin="normal"
            variant="outlined"
            />
            <TextField
            fullWidth
            label="Date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            <TextField
            fullWidth
            label="Email Info Date"
            name="emailInfo.date"
            value={eventDetails.emailInfo.date}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            <TextField
            fullWidth
            label="Email Info Location"
            name="emailInfo.location"
            value={eventDetails.emailInfo.location}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
            <InputLabel htmlFor="upload-image">Upload Event Image</InputLabel>
            <Input
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                sx={{ paddingTop: 1 }}
            />
            {imagePreview && (
                <img
                src={imagePreview}
                alt="Preview"
                style={{ marginTop: '16px', maxWidth: '100%', maxHeight: '200px' }}
                />
            )}
            {Array.from({ length: eventDetails.tix }).map((_, index) => (
            <Box key={index} sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <TextField
                fullWidth
                label={`Section (${index + 1})`}
                name={`seatMap-${index}-sec`}
                value={eventDetails.seatMap[index]?.sec || ''}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
                <TextField
                fullWidth
                label={`Row (${index + 1})`}
                name={`seatMap-${index}-row`}
                value={eventDetails.seatMap[index]?.row || ''}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
                <TextField
                fullWidth
                label={`Seat (${index + 1})`}
                name={`seatMap-${index}-seat`}
                value={eventDetails.seatMap[index]?.seat || ''}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
            </Box>
            ))}
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Update Event Details
            </Button>
        </Box>
        </Container>
    );
};

export default UpdateEventPage;
