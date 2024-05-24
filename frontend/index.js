function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const container = document.createElement('nav')
    links.forEach(link => {
      let a = document.createElement('a')
      a.href = link.href;
      a.title = link.title;
      a.textContent = link.textContent;
      container.appendChild(a)

    })
    return container
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const card = document.createElement('div')
    // card.textContent = 'WIP'
    card.classList.add('learner-card')
    const nameP = document.createElement('p');
    nameP.textContent = learner.fullName;

    const idEle = document.createElement('p');
    idEle.textContent = `Learner ID: ${learner.id}`

    const dobP = document.createElement('p')
    dobP.textContent = `Date of Birth: ${learner.dateOfBirth}`

    const favP = document.createElement('p')
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage)
    favP.textContent = `Favorite Language: ${favLanguage.name}`;

    [nameP, idEle, dobP, favP].forEach(p => {
      card.appendChild(p)
    })

    card.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove('active')
      })
      card.classList.add('active')
    })
    return card
  }
  
  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer')

    const divInfo = document.createElement('div');
    divInfo.classList.add('company-info')

    const p1 = document.createElement('p');
    p1.classList.add('company-name')
    p1.textContent = footerData.companyName

    const p2 = document.createElement('p');
    p2.classList.add('address')
    p2.textContent = footerData.address

    const p3 = document.createElement('p');
    p3.classList.add('contact-email')
    p3.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail} </a>`

    divInfo.appendChild(p1)
    divInfo.appendChild(p2)
    divInfo.appendChild(p3)

   


    const divMedia = document.createElement('div');
    divMedia.classList.add('social-media')

   for(let platform in footerData.socialMedia) {
    let socialMedia = document.createElement('a')
    socialMedia.href = footerData.socialMedia[platform]
    socialMedia.textContent = `${platform.charAt(0).toUpperCase()}${platform.slice(1)}`
    divMedia.appendChild(socialMedia)
   }
   
   let currentYear = new Date().getFullYear();
   let copyRight = document.createElement('div')
   copyRight.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`

   footer.appendChild(divInfo)
   footer.appendChild(divMedia)
   footer.appendChild(copyRight)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  document.addEventListener('click', evt => {
    if(evt.target === document.querySelector('section')) {
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(card => card.classList.remove('active'))
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
