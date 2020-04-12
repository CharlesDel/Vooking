//rcc
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.jpg";
import Button from 'react-bootstrap/Button';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">

                <table>
                    <tbody>
                    <tr>
                        <td>
                            <Link to="/">
                                    <img src={logo} alt="Beach Resort"className="logo" />
                                </Link>

                        </td>
                        <td  width="1000" align="right">

                            <table >
                                <tbody>
                                    <tr>
                                        <td style={{alignContent:""}}>
                                            <Button variant="link">MXN</Button>
                                        </td>
                                        <td>
                                            <Button  variant="outline-primary">List Your property</Button>
                                        </td>
                                        <td>
                                            <Button variant="link">Register</Button>
                                        </td>
                                        <td>
                                            <Button variant="link">Sign in</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={menu} alt=""/>
                    </td>
                    </tr>
                    </tbody>
                </table>
            </nav>
        )
    }
}
