import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #f0f1f3; /* Ubah warna latar belakang menjadi putih */
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; */
`;

 
export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto; /* Menggunakan auto untuk menengahkan elemen secara horizontal */
    text-align: center; /* Menengahkan teks ke tengah halaman */
    color: black; /* Mengubah warna font menjadi hitam */
    margin-top: 5px; /* Atur manual kedalaman teks */
    margin-right: 300px;
    white-space: nowrap; */
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

