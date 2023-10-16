function contactLoad() {
    const contact = document.createElement('div');

    //Create and append contact header
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "CONTACT US";
    contact.appendChild(contactHeader);

    //Create and append to contact form
    const contactForm = document.createElement('form');
    
    //Create and append the contact mail
    const contactMail = document.createElement('input');
    contactMail.setAttribute("type", "text");
    contactMail.setAttribute("name", "email");
    contactMail.setAttribute("placeholder", "Enter your e-mail");
    contactMail.setAttribute("required",);
    contactForm.appendChild(contactMail);

    //Create and append the contact title
    const contactTitle = document.createElement("input");
    contactTitle.setAttribute("type", "text");
    contactTitle.setAttribute("name", "title");
    contactTitle.setAttribute("placeholder", "Title of your message");
    contactTitle.setAttribute("required",);
    contactForm.appendChild(contactTitle);

    //Create and append the contact textarea
    const contactTA = document.createElement('textarea');
    contactTA.setAttribute("name", "textarea");
    contactTA.setAttribute("rows", "4");
    contactTA.setAttribute("cols", "20");
    contactTA.setAttribute("placeholder", "Your message...");
    contactTA.setAttribute("required",);
    contactForm.appendChild(contactTA);

    //Create and append the submit button
    const contactSubmit = document.createElement("button");
    contactSubmit.setAttribute("type", "submit");
    contactSubmit.setAttribute("value", "submit");
    contactForm.appendChild(contactSubmit);

    contact.appendChild(contactForm);

    return contact;
}

export default contactLoad;