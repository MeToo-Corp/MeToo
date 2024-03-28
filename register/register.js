    // JavaScript validation
    document.getElementById('registrationForm').onsubmit = function(event) {
        var termsChecked = document.getElementById('termsCheckbox').checked;
        

        organizationType
        if (!termsChecked) {
            alert('Please agree to the terms and conditions to proceed.');
            event.preventDefault();
        }
    };
    const organizationType = document.getElementById('organizationType');
    
    organizationType.addEventListener("change", (e) => {
            const selectedValue = e.target.value;
            const hiddentForm = document.getElementById('hiddentForm');
            hiddentForm.hidden = false;
            if (selectedValue === "Private") {
                const companyName = document.getElementById('companyName');
                companyName.hidden = true
                const incorporationLetter = document.getElementById('incorporationLetter');
                incorporationLetter.hidden = true
            } else {
                const companyName = document.getElementById('companyName');
                companyName.hidden = false
                const incorporationLetter = document.getElementById('incorporationLetter');
                incorporationLetter.hidden = false
            }
        })
    const fieldset = document.getElementById('brokersFieldset');
    
    
    fieldset.addEventListener("change", (e) => {
        const selectedValue = e.target.value

        const selectedCheckboxes = document.querySelectorAll('#brokersFieldset input[type="checkbox"]:checked');
        let selectedCheckboxesArray = []; 

        selectedCheckboxes.forEach(item => {
            selectedCheckboxesArray.push(item.value);
        })

        if (selectedValue === "none") {
            selectedCheckboxes.forEach(item => {
                if (item.value !== "none") {
                    item.checked = false;
                }
            })
        } else if (selectedValue !== "none" && selectedCheckboxesArray.includes("none")){
            selectedCheckboxes.forEach(item => {
                if (item.value === "none") {
                    item.checked = false;
                }
            })
        }
    })

