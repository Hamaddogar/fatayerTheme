// utils/socket.js
import { io } from 'socket.io-client';
// import useStyleConfig from './styleConfig';

// const domain = "https://www.overzaki.io";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcwOTgwMTI0MTUwZjQ3YzQwNGI2ODQiLCJkZXZpY2VOYW1lIjoidW5pcXVlIGRldmljZSBuYW1lIiwiaWF0IjoxNzA0MzU5MzY4LCJleHAiOjE3MDUyMjMzNjh9.wC0JtvEO3wrCG7qpLJbipZijZTt0Z3znEgCwuXafBBw";
// const socket = io(domain + '/design?token=' + token);
const domain: string | undefined = process.env.NEXT_PUBLIC_SOCKET_URL || "";

const socket = io(domain);

socket.on('connect', () => {
    console.log("Connected to server");
});
socket.on('disconnect', () => {
    console.log("Disconnected from server");
}); ``
socket.on('error', (error) => {
    console.log("Error from server", error);
});

export default socket;