// document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
//     event.preventDefault();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
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
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        // Get Values from Form 
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeHTML = "\n            <h2> Resume </h2> \n            <h3> Profile Picture </h3> \n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n            <h3> Personal Information </h3>\n            <p> <strong> Name: </strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span> </p>\n            <p> <strong> Email: </strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span> </p>\n            <p> <strong> Phone: </strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span> </p>\n            <h3> Education </h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n            <h3> Experience </h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n            <h3> Skills </h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        var downloadLink = document.createElement('a');
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeHTML);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your Resume";
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove('hidden');
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = 'block';
            makeEditable();
            //create Container for buttons
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            //add Download PDF Button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            //Add Shareable Link Button
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Shareable Link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert("Shareable Link Copied To Clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to Copy Linkl:", err_1);
                            alert("Failed To copy Link: Please Try Again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            console.error("The resumeOutput element is missing.");
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content with an input field
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing", "input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
