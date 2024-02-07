import React from "react";

function AboutUs() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <div className="bg-[#E3E4E8] py-10">
      <div className="mx-auto md:px-20 2xl:max-w-7xl">
        <div className="flex flex-col w-full">
          <div className="flex flex-grow items-center pb-6 md:pb-0">
            <form
              className="flex flex-col w-full gap-4"
              onClick={(e) => e.stopPropagation()}
              name="feedbackFormTest"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="feedbackFormTest" />

              <input type="text" name="name" placeholder="YourName" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                className="input-feedback overflow-auto max-h-40"
                rows="3"
                placeholder="Message"
                required
              />

              <div data-netlify-recaptcha="true"></div>

              <button
                type="submit"
                className="px-5 py-4 mt-4 rounded-lg text-center text-sm md:text-base font-medium text-white bg-[#3C6E71]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
