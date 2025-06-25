
const form = document.getElementById("myForm");
const kirim = document.getElementById("submit");
const error = document.getElementById("error");
const success = document.getElementById("success");

console.log("Error:", error)
console.log("Success:", success)

form.addEventListener("submit", (event) => {
    
    const nameInput = document.getElementById("nama");
    const emailInput = document.getElementById("email");
            
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    error.textContent = "";
    success.textContent = "";

            
    if (name === '' || email === '') {
        error.textContent = "Nama dan email harus diisi!";
        event.preventDefault();
        return;
    }

    if (!email.includes('@')) {
        error.textContent = "Email tidak valid!";
        event.preventDefault();
        return;
    }

    if (name.lenght < 3) {
        error.textContent = "Nama harus lebih dari 2 karakter!";
        event.preventDefault();
        return;
    }

    success.textContent = "Form berhasil dikirim!";
    alert(`Form submitted with Name: ${name} and Email: ${email}`); 

    event.preventDefault(); // Mencegah pengiriman form untuk demonstrasi
    console.log("Form terkirim")
    console.log("Nama:", name);
    console.log("Email:", email);
});