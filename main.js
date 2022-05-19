import './style.scss';

import 'bootstrap';
import 'waypoints/lib/noframework.waypoints.min';
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

// let options = {
//     strings: ['SEDAN'],
//     typeSpeed: 40,
//     backDelay: 1000,
//     loop : true
// };
//
// var typed = new Typed('.sedan-hero-section-text', options);

let slideDown = {
    distance: '70px',
    origin: 'top',
    duration : 2000,
    interval : 500
};

ScrollReveal().reveal('.content', slideDown);
