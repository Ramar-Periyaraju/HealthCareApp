import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'path-to-appointment-service'; // Import your appointment service
import { Doctor } from 'path-to-doctor-model'; // Import your Doctor model

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  appointment = {
    patientName: '',
    phone: '',
    email: '',
    selectedDoctor: null,
    appointmentDate: '',
    department: '',
    description: ''
  };

  doctors: Doctor[] = []; // Assuming you have a Doctor model

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    // Fetch the list of doctors when the component initializes
    this.appointmentService.getDoctors().subscribe(
      (doctors) => {
        this.doctors = doctors;
      },
      (error) => {
        console.error('Error fetching doctors:', error);
        // Handle error, show error message, etc.
      }
    );
  }

  makeAppointment() {
    this.appointmentService.makeAppointment(this.appointment).subscribe(
      (response) => {
        console.log('Appointment made successfully:', response);
        // Optionally, you can navigate to a success page or perform other actions
      },
      (error) => {
        console.error('Error making appointment:', error);
        // Handle error, show error message, etc.
      }
    );
  }
}
