    const form = document.querySelector('form');
      const outputName = document.querySelector('#output-name');
      const outputEmail = document.querySelector('#output-email');
      const outputContact = document.querySelector('#output-contact');
      const outputExperience = document.querySelector('#output-experience');
      const outputLanguage = document.querySelector('#output-language');
      const outputAddress = document.querySelector('#output-address');
      const outputEducation = document.querySelector('#output-education');
      const outputSkills = document.querySelector('#output-skills');
      const outputProject = document.querySelector('#output-project');  
      const outputReference = document.querySelector('#output-reference');
      
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        outputName.textContent = form.elements.name.value;
        outputEmail.textContent = form.elements.email.value;
        outputContact.textContent = form.elements.contact.value;
        outputExperience.textContent = form.elements.experience.value;
        outputLanguage.textContent = form.elements.language.value;
        outputAddress.textContent = form.elements.address.value;
        outputEducation.textContent = form.elements.education.value;
        outputSkills.textContent = form.elements.skills.value;
        outputProject.textContent = form.elements.project.value;
        outputReference.textContent = form.elements.reference.value;
        form.reset();
      });

      