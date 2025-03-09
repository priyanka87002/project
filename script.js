document.getElementById('appointment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting to the server

    const name = document.getElementById('patient-name').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('appointment-date').value;
    const message = document.getElementById('message').value;

    // Show confirmation message
    document.getElementById('confirmation').style.display = 'block';

    // Optionally, you can log the appointment data or send it to a server.
    console.log("Appointment Details:");
    console.log("Name: " + name);
    console.log("Doctor: " + doctor);
    console.log("Date: " + date);
    console.log("Message: " + message);
});


