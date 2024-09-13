// document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
//     const nameElement = document.getElementById("name") as HTMLInputElement;
//     const emailElement = document.getElementById("email") as HTMLInputElement;
//     const phoneElement = document.getElementById("phone") as HTMLInputElement;
//     const educationElement = document.getElementById("education") as HTMLTextAreaElement;
//     const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
//     const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
//     const usernameElement = document.getElementById("username") as HTMLInputElement;

//     if (profilePictureInput && 
//         nameElement && 
//         emailElement && 
//         phoneElement && 
//         educationElement && 
//         experienceElement && 
//         skillsElement && 
//         usernameElement
//     ){   
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         const username = usernameElement.value;

//         // Generate a unique path (You should manage paths safely on your server)
//         const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;

//         // Handle profile picture
//         const profilePictureFile = profilePictureInput.files?.[0];
//         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

//         // Resume content generation
//         const resumeOutput = `
//             <h2> Resume </h2> 
//             <h3> Profile Picture </h3> 
//             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
//             <h3> Personal Information </h3>
//             <p> <strong> Name: </strong> <span id="edit-name" class="editable">${name}</span> </p>
//             <p> <strong> Email: </strong> <span id="edit-email" class="editable">${email}</span> </p>
//             <p> <strong> Phone: </strong> <span id="edit-phone" class="editable">${phone}</span> </p>
//             <h3> Education </h3>
//             <p id="edit-education" class="editable">${education}</p>
//             <h3> Experience </h3>
//             <p id="edit-experience" class="editable">${experience}</p>
//             <h3> Skills </h3>
//             <p id="edit-skills" class="editable">${skills}</p>
//         `;

//         const resumeOutputElement = document.getElementById("resumeOutput");
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             resumeOutputElement.classList.remove("hidden");
//         } else {
//             console.error("Resume Output Container Not Found");
//             return;
//         }

//         // Create container for buttons
//         const buttonContainer = document.createElement("div");
//         buttonContainer.id = "buttonContainer";
//         resumeOutputElement.appendChild(buttonContainer);

//         // Download as PDF button
//         const downloadButton = document.createElement("button");
//         downloadButton.textContent = "Download as PDF";
//         downloadButton.addEventListener("click", () => {
//             window.print(); // Printing to save as PDF
//         });
//         buttonContainer.appendChild(downloadButton);

//         // Shareable link button
//         const shareLinkButton = document.createElement("button");
//         shareLinkButton.textContent = "Copy Shareable Link";

//         shareLinkButton.addEventListener("click", async () => {
//             // Check if clipboard API is supported
//             if (navigator.clipboard) {
//                 try {
//                     const shareableLink = `https://yourdomain.com/resume/${username.replace(/\s+/g, '_')}_cv.html`;
//                     await navigator.clipboard.writeText(shareableLink);
//                     alert("Shareable Link Copied To Clipboard");
//                 } catch (err) {
//                     console.error("Failed to Copy Link:", err);
//                     alert("Failed to Copy Link. Please Try Again.");
//                 }
//             } else {
//                 alert("Clipboard API not supported in this browser.");
//             }
//         });
//         buttonContainer.appendChild(shareLinkButton);
//     } else {
//         console.error("Some required fields are missing.");
//     }
// });


document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const usernameElement = document.getElementById("username") as HTMLInputElement;

    if (profilePictureInput && 
        nameElement && 
        emailElement && 
        phoneElement && 
        educationElement && 
        experienceElement && 
        skillsElement && 
        usernameElement
    ){   
      // Get Values from Form 

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value;

const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

const resumeHTML = `
            <h2> Resume </h2> 
            <h3> Profile Picture </h3> 
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
            <h3> Personal Information </h3>
            <p> <strong> Name: </strong> <span id="edit-name" class="editable">${name}</span> </p>
            <p> <strong> Email: </strong> <span id="edit-email" class="editable">${email}</span> </p>
            <p> <strong> Phone: </strong> <span id="edit-phone" class="editable">${phone}</span> </p>
            <h3> Education </h3>
            <p id="edit-education" class="editable">${education}</p>
            <h3> Experience </h3>
            <p id="edit-experience" class="editable">${experience}</p>
            <h3> Skills </h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;

const downloadLink = document.createElement('a')
downloadLink.href=`data:text/html;charset=utf-8,` + encodeURIComponent(resumeHTML)
downloadLink.download = uniquePath;
downloadLink.textContent = "Download Your Resume";


        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove('hidden');
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = 'block';
            makeEditable();
    
            //create Container for buttons

            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            //add Download PDF Button

            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", ()=>{
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);

            //Add Shareable Link Button

            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Shareable Link";
            shareLinkButton.addEventListener("click" , async ()=>{
                
                try{
                    // Create a unique Shareable Link

                 const shareableLink =`https://yourdomain.com/resumes/${name.replace(
                  /\s+/g,"_")}_cv.html`;

                  await navigator.clipboard.writeText(shareableLink);
                  alert("Shareable Link Copied To Clipboard");
                } catch(err){
                    console.error("Failed to Copy Linkl:" , err);
                    alert("Failed To copy Link: Please Try Again");
                }
            });
        } else {
            console.error("The resumeOutput element is missing.");
        }
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener("click", function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Replace content with an input field
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                const input = document.createElement("input");
                input.type = "text";
                input.value = currentValue;
                input.classList.add("editing", "input");

                input.addEventListener("blur", function() { 
                    currentElement.textContent = input.value;
                    currentElement.style.display = "inline";
                    input.remove();
                });

                currentElement.style.display = "none";
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}