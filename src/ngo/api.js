import axios from "axios";
const API="http://localhost:7777";
const getProjects =()=>axios.get(`${API}/ngo/all`)
const getProjects1=()=>axios.get(`${API}/ngo1/all`)
const getProjects2=()=>axios.get(`${API}/ngo2/all`)
const getProjects3=()=>axios.get(`${API}/blog/all`)
const getProjectsbyID=(id)=>axios.get(`${API}/ngo/${id}`)
const getProjectsbyID1=(id)=>axios.get(`${API}/ngo1/${id}`)
const getProjectsbyID2=(id)=>axios.get(`${API}/ngo2/${id}`)
const getProjectsbyID3=(id)=>axios.get(`${API}/blog/${id}`)
const addProjects=(projectdata)=>axios.post(`${API}/ngo/add`,projectdata)
const addProjects1=(projectdata)=>axios.post(`${API}/ngo1/add`,projectdata)
const addProjects2=(projectdata)=>axios.post(`${API}/ngo2/add`,projectdata)
const addProjects3=(projectdata)=>axios.post(`${API}/blog/add`,projectdata)

export { addProjects, addProjects1, addProjects2, addProjects3, getProjects, getProjects1, getProjects2, getProjects3, getProjectsbyID, getProjectsbyID1, getProjectsbyID2, getProjectsbyID3 };

