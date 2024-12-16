const quotes = [
    {
        text: "You can't cross the sea merely by standing and staring at the water.",
        author: "Rabindranath Tagore"
    },
    {
        text: "Faith is the bird that feels the light when the dawn is still dark.",
        author: "Rabindranath Tagore"
    },
    {
        text: "The butterfly counts not months but moments, and has time enough.",
        author: "Rabindranath Tagore"
    }
];

// Initialize the book
function initializeBook() {
    // Set up quotes
    quotes.forEach((quote, index) => {
        const quoteElement = document.getElementById(`quote${index + 1}`);
        const authorElement = document.getElementById(`author${index + 1}`);
        if (quoteElement && authorElement) {
            quoteElement.textContent = quote.text;
            authorElement.textContent = `- ${quote.author}`;
        }
    });

    // Add extra pages for thickness
    const extraPagesContainer = document.getElementById('extra-pages');
    for (let i = 0; i < 26; i++) {
        const extraPage = document.createElement('div');
        extraPage.className = 'page';
        extraPagesContainer.appendChild(extraPage);
    }

    // Set initial z-index for pages
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        if (i % 2 === 0) {
            pages[i].style.zIndex = String(pages.length - i);
        }
    }
}

function handleClick(pageNum) {
    const pages = document.getElementsByClassName('page');
    const currentPage = pages[pageNum - 1];
    
    if (pageNum % 2 === 0) {
        currentPage.classList.remove('flipped');
        currentPage.previousElementSibling?.classList.remove('flipped');
    } else {
        currentPage.classList.add('flipped');
        currentPage.nextElementSibling?.classList.add('flipped');
    }
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', initializeBook);