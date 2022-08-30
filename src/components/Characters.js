import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';

import Menu from './Menu';

import './Characters.css';

const Characters = () => {

    let navigate = useNavigate();

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        fetch(`https://rickandmortyapi.com/api/character`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
            .then(async (resp)=>{

                switch (resp.status) {

                    case 200:
                        let json = await resp.json();
                        //console.log(json);
                        setCharacters(json.results);
                        break;

                    default:
                        window.alert("Error al conectar con la API");
                        navigate("/");
                        break;

                }

            }).catch(error=>{
                console.error(error);
            })

    }, []);

    function formatDate(date){
        let dateformatted = new Date(date);

        let year = dateformatted.getFullYear();
        let month = dateformatted.getMonth()+1;
        let dt = dateformatted.getDate();
        
        if (dt < 10) {
        dt = '0' + dt;
        }
        if (month < 10) {
        month = '0' + month;
        }

        return dt+'-' + month + '-'+ year;
    }

    return (
        <div>
            <Menu />
            <Container fluid>
                <div className="container-fluid-content">
                    <div className="camera-container">
                        <img src="/img/camera-movie.png" className="d-inline-block align-top" alt="React Bootstrap logo" />
                        <h1>Personajes</h1> 
                    </div>
                    <div className="statistics-container">
                        <div className="total-characters rounded-3">
                            Total de personajes<div className="number number-total">75</div>
                        </div>
                        <div className="status rounded-3">
                            <div className="statusImg">
                                <img src="/img/Icono de vivo.png" alt="Alive" />
                            </div>
                            <div className="statusText">
                                Personajes vivos
                            </div>
                            <div className="number">22</div>
                            <div className="status-divider">|</div>
                            <div className="statusImg">
                                <img src="/img/Icono de muerto.png" alt="Dead" />
                            </div>
                            <div className="statusText">
                                Personajes muertos
                            </div>
                            <div className="number">0</div>
                        </div>
                        <div className="search">
                            <div className="searchImg">
                                <img src="/img/Icono de busqueda.png" alt="Search" />
                            </div>
                            <input className="rounded-5" type="text" placeholder="Buscar"></input>
                        </div>
                    </div>
                    <div className="table-container shadow p-3 mb-5 bg-white rounded-3" >
                        <Table responsive className="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Vivo</th>
                                    <th>Especie</th>
                                    <th>Genero</th>
                                    <th>Origen</th>
                                    <th>Locación</th>
                                    <th>Capítulos</th>
                                    <th>Fecha</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                { characters.map((e, index) => (
                                <tr key={index}>
                                    <td>{e.name}</td>
                                    <td className="table-statusImg">
                                        {e.status === 'Alive' ? <img src="/img/Icono de vivo.png" alt="Alive" /> : <img src="/img/Icono de muerto.png" alt="Dead" />}
                                    </td>
                                    <td>{e.species}</td>
                                    <td>{e.gender}</td>
                                    <td>{e.origin.name}</td>
                                    <td>{e.location.name}</td>
                                    <td>{e.episode.length}</td>
                                    <td>{formatDate(e.created)}</td>
                                    <td className="table-actions">
                                        <img src="/img/Icono imagen.png" alt="Actions" />
                                        <div className="actionsText">Acciones</div>
                                    </td>
                                </tr>
                                )) }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    );

};

export default Characters;