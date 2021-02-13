import './App.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Switch, Router, useHistory } from 'react-router-dom';
import { BarChart, PieChart } from './Chart';
import 'animate.css';
import Swal from 'sweetalert2';


function Dashboard() {


    let chart;
    const history = useHistory();
    if (localStorage.getItem('token') == null) {
        Swal.fire({
            title: 'Oops!',
            icon: 'error',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            html: '<b>Unauthorized access detected</b>',
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',


            },
            timer: 1000

        })
        setTimeout(() => {
            history.push("/");

        }, 1000)
    }

    if (localStorage.getItem('token') === 'John') {
        chart = <BarChart />
    }
    else if (localStorage.getItem('token') === 'MICKY') {
        chart = <PieChart />
    }
    return (

        <div className="App">
            <header className="App-header">

                <h1 style={{
                    padding: 20,
                    fontFamily: 'monospace'
                }} class="animate__animated animate__fadeInLeftBig">Welcome {localStorage.getItem('token')}</h1>

                {chart}

                <div id="button" class="row" style={
                    {
                        width: '150px'
                    }
                }><button class="animate__animated animate__fadeIn" style={{
                    animationDelay: '2s'
                }} onClick={() => {
                    const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-success',
                            cancelButton: 'btn btn-danger'
                        },
                        buttonsStyling: true
                    })

                    swalWithBootstrapButtons.fire({
                        title: 'Are you sure?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.removeItem('token')
                            Swal.fire({
                                title: 'Logged out',
                                icon: 'success',

                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                html: '<b>See you next time!</b>',
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp',

                                },
                                timer: 1000

                            })
                            setTimeout(() => {
                                history.push('/');
                            }, 1000)
                        }
                    })
                }}>Sign Out</button></div>
            </header>

        </div>

    );


}

export default Dashboard;
