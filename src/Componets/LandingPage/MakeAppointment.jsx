import axios from 'axios'

import React, { useEffect, useState } from 'react'


const MakeAppointment = () => {

    const [BookAppointmentData, SetBookAppointmentData] = useState({
        Name: '',
        mobile: '',
        date: '',
        doctor: '',
        department: ''
    })
    const From_Data_Submit = () => {
        const formData = new FormData()
        formData.append('add','blog')
        formData.append('Name', BookAppointmentData.Name)
        formData.append('mobile', BookAppointmentData.mobile)
        formData.append('date', BookAppointmentData.date)
        formData.append('doctor', BookAppointmentData.doctor)
        formData.append('department', BookAppointmentData.department)

        axios.post('http://localhost/work/hospital_be/front-appointment.php', formData)
            .then(function (response) {
                console.log(response);
                // window.location.reload();

            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const Form_Fetch_Data = (i) => {
        let targetName, targetValue
        targetName = i.target.name
        targetValue = i.target.value
        console.log(targetName, "name");
        console.log(targetValue, "value");
        SetBookAppointmentData({ ...BookAppointmentData, [targetName]: targetValue })
    }


    return (
        <div className="wrapper">
            <div className="container">
                <div className="slider_form row">
                    <p className="col-12">Make an Appointment</p>
                    <div className="col-lg-4 col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" name='Name' onChange={Form_Fetch_Data} placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="form-group">
                            <input type="text" name="mobile" onChange={Form_Fetch_Data} placeholder="Enter Mobile" className="form-control m-b-15" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="form-group">
                            <input type="text" name="date" onChange={Form_Fetch_Data} placeholder="Enter Date" className="form-control m-b-15" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <select className="form-control m-b-15" onChange={Form_Fetch_Data} name="doctor">
                            <option selected>Select Doctor</option>
                            <option value="Marc Parcival">Marc Parcival</option>
                            <option value="Alen Bailey" >Alen Bailey</option>
                            <option value="Basil Andrew" >Basil Andrew</option>
                            <option value="iles Franklin" >Giles Franklin</option>
                            <option value="Edgar Denzil" >Edgar Denzil</option>
                            <option value="Garfield Feris" >Garfield Feris</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <select className="form-control" onChange={Form_Fetch_Data} name="department">
                            <option selected>Select Department</option>
                            <option value="Cardiology" >Cardiology</option>
                            <option value="Pulmonology" >Pulmonology</option>
                            <option value="Gynecology" >Gynecology</option>
                            <option value="Neurology" >Neurology</option>
                            <option value="Urology" >Urology</option>
                            <option value="Gastrology" >Gastrology</option>
                            <option value="Pediatrician" >Pediatrician</option>
                            <option value="Laboratory">Laboratory</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <input type="submit" onClick={From_Data_Submit} className="btn btn-primary btn-round btn-block m-t-0 m-b-0" value="submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAppointment
