// Document is loaded
document.addEventListener('DOMContentLoaded', (loaded) => {
    console.log("Document loaded")
})

$(document).ready(function () {
    // Create and append nav elements
    var nav = $('<nav></nav>');
    var logo = $('<div class="logo"></div>');
    var logoLink = $('<a href="index.html"></a>');
    var logoImg = $('<img src="./img/logo.svg" alt="Spin City Brand Logo" />');

    logoLink.append(logoImg);
    logo.append(logoLink);

    var ul = $('<ul></ul>');
    var homeLi = $('<li></li>');
    var homeLink = $('<a href="index.html">Home <i class="fa-solid fa-house"></i></a>');
    var productsLi = $('<li></li>');
    var productsLink = $('<a href="products.html">Products <i class="fa-solid fa-cart-shopping"></i></a>');
    var aboutLi = $('<li></li>');
    var aboutLink = $('<a href="about.html">About <i class="fa-solid fa-user"></i></a>');
    var contactLi = $('<li></li>');
    var contactLink = $('<a href="contact.html">Contact <i class="fa-solid fa-envelope"></i></a>');

    homeLi.append(homeLink);
    productsLi.append(productsLink);
    aboutLi.append(aboutLink);
    contactLi.append(contactLink);
    ul.append(homeLi, productsLi, aboutLi, contactLi);

    nav.append(logo, ul);

    // Create and append footer
    var footerContainer = $('<div></div>')
    var footerLinks = $('<ul></ul>');
    var privacyLi = $('<li></li>');
    var privacyLink = $('<a href="#">Privacy Policy</a>');
    var termsLi = $('<li></li>');
    var termsLink = $('<a href="#">Terms of Service</a>');

    privacyLi.append(privacyLink);
    termsLi.append(termsLink);
    footerLinks.append(privacyLi, termsLi);

    var footerCopyright = $('<p>&copy; 2023 Spin City. All rights reserved.</p>');

    footerContainer.append(footerLinks, footerCopyright);

    // Append to element
    $('#header').append(nav);
    $('#footer').append(footerContainer);
});
