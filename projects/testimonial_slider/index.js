const testimonials = [
    {
        name: "Zilvia F.",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: "I don't always clop, but when I do, it's because of Testimonial Generator. I don't know what else to say. Thank you so much for your help."
    },
    {
        name: "May D.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "I have gotten at least 50 times the value from Testimonial Generator. Testimonial Generator has really helped our business. Not able to tell you how happy I am with Testimonial Generator."
    },
    {
        name: "Carmelina L.",
        photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "I'm good to go. Testimonial Generator is worth much more than I paid. Testimonial Generator is the most valuable business resource we have EVER purchased. We were treated like royalty"
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[index];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++;
    if (index >= testimonials.length) {
        index = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 10000);
}