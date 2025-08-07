# FullStack Website: Python DRF + React TS + Vite (SSR) with SEO

<div align="center">
  <img src="https://img.shields.io/badge/Python-3.13.5-3776AB?logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Django-5.2.4-092E20?logo=django&logoColor=white" alt="Django">
  <img src="https://img.shields.io/badge/DRF-3.16-A30000?logo=django&logoColor=white" alt="DRF">
  <img src="https://img.shields.io/badge/React-19.1.9-61DAFB?logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-7.0.6-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/MUI-7.3-646CFF?logo=mui&logoColor=white" alt="MUI">
</div>

## Introduction

A simple modern FullStack website. Django (DRF) as a backend. React TypeScript (implemented SSR) for the frontend. Vite as building tool.
The backend implements an API for receiving articles and searching them (django-filters), there are no authorization mechanisms, etc.
The frontend uses: react-router-dom, @reduxjs/toolkit, @mui/material, react-helmet-async, express (for SSR).


## Backend

The backend includes both the API and the admin panel. The API is written using DRF tools. And django-filters contributed to the implementation of article search. The admin panel is configured using built-in django mechanisms. Also, because this is a simple project, the native sqlite3 database was used.


## Frontend

In the frontend, due to the use of MUI, there is an adaptive for all devices, as well as the corresponding styling. Due to redux, RTK-Queries were implemented and the store was configured. With the help of router-dom, the main pages were configured (+ 404). Thanks to react-helmet-async, SEO improvements were made. And express contributed to the implementation of SSR.

## SEO

Regarding SEO, the site has semantic layout, og tags, robots.txt file is configured. And all this is possible due to SSR.