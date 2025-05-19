"use client"
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    "Last Name": "",
    "Mobile": "",
    "Email": "",
    "Description": ""
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";
    
    switch(name) {
      case "Last Name":
        if (!value.trim()) {
          error = "Name cannot be empty";
        } else if (value.length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "Mobile":
        if (!value.trim()) {
          error = "Mobile cannot be empty";
        } else if (!/^[0-9a-zA-Z+.()\-;\s]+$/.test(value)) {
          error = "Enter valid Mobile number";
        }
        break;
      case "Email":
        if (!value.trim()) {
          error = "Email cannot be empty";
        } else if (!/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/.test(value)) {
          error = "Enter valid Email";
        }
        break;
      case "Description":
        if (!value.trim()) {
          error = "Description cannot be empty";
        }
        break;
    }
    
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("xnQsjsdp", "386c04970cce211618607a75ba30d96ce2c28c3156cdf0638d2b3112d189fd39");
    formDataToSubmit.append("zc_gad", "");
    formDataToSubmit.append("xmIwtLD", "7b007a84ab61418f4193e1357a676484468c7c72b3b8523f774c0df93bdbd91d0d3a6cb600f00389cfc6910fb0645071");
    formDataToSubmit.append("actionType", "Q29udGFjdHM=");
    formDataToSubmit.append("rmsg", "true");
    formDataToSubmit.append("returnURL", "null");
    
    // Add form fields
    formDataToSubmit.append("Last Name", formData["Last Name"]);
    formDataToSubmit.append("Mobile", formData.Mobile);
    formDataToSubmit.append("Email", formData.Email);
    formDataToSubmit.append("Description", formData.Description);

    try {
      const response = await fetch("", {
        method: "POST",
        body: formDataToSubmit,
        headers: {
          "Accept": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Reset form after successful submission
      setFormData({
        "Last Name": "",
        "Mobile": "",
        "Email": "",
        "Description": ""
      });
      setErrors({});
      
      // Show success message (you can implement this as needed)
      alert("Form submitted successfully!");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors(prev => ({
        ...prev,
        submit: "Failed to submit form. Please try again."
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 h-full box-border overflow-auto bg-[#EAEEF2] bg-no-repeat bg-[length:100%_100%]">
      <div className="w-full max-w-[700px] rounded-[10px] mx-auto border-none bg-white text-[#222] shadow-[0px_0px_2px_0_#00000033]">
        <form 
          className="p-[30px_40px_60px] font-['Arial'] relative text-[15px]" 
          data-ux-form-alignment="top" 
          onSubmit={handleSubmit}
        >
          <div className="text-[22px] pb-[35px] font-bold break-words">Contact Us</div>
          <div>
            <div className="mb-5">
              <div className="py-[7px] break-words">Name</div>
              <div className={`relative text-left break-words border-0 ${errors["Last Name"] ? "animate-shake" : ""}`}>
                <div className="relative flex flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6a6a] rounded-l-[4px] z-[2]"></div>
                  <input
                    name="Last Name"
                    maxLength={80}
                    type="text"
                    value={formData["Last Name"]}
                    onChange={handleChange}
                    className={`w-full border border-[#BDC8D3] rounded-[4px] p-[10px_15px] min-h-[38px] text-[15px] font-inherit appearance-none focus:border-[#1AB16D] focus:outline-none ${
                      errors["Last Name"] ? "border-[#FD6B6D] shadow-[0_0_1px_1px_#F4A2A2]" : ""
                    }`}
                  />
                </div>
                {errors["Last Name"] && (
                  <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake">
                    {errors["Last Name"]}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-5">
              <div className="py-[7px] break-words">Mobile</div>
              <div className={`relative text-left break-words border-0 ${errors.Mobile ? "animate-shake" : ""}`}>
                <div className="relative flex flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6a6a] rounded-l-[4px] z-[2]"></div>
                  <input
                    name="Mobile"
                    maxLength={30}
                    type="text"
                    value={formData.Mobile}
                    onChange={handleChange}
                    className={`w-full border border-[#BDC8D3] rounded-[4px] p-[10px_15px] min-h-[38px] text-[15px] font-inherit appearance-none focus:border-[#1AB16D] focus:outline-none ${
                      errors.Mobile ? "border-[#FD6B6D] shadow-[0_0_1px_1px_#F4A2A2]" : ""
                    }`}
                  />
                </div>
                {errors.Mobile && (
                  <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake">
                    {errors.Mobile}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-5">
              <div className="py-[7px] break-words">Email</div>
              <div className={`relative text-left break-words border-0 ${errors.Email ? "animate-shake" : ""}`}>
                <div className="relative flex flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6a6a] rounded-l-[4px] z-[2]"></div>
                  <input
                    name="Email"
                    maxLength={100}
                    type="text"
                    value={formData.Email}
                    onChange={handleChange}
                    className={`w-full border border-[#BDC8D3] rounded-[4px] p-[10px_15px] min-h-[38px] text-[15px] font-inherit appearance-none focus:border-[#1AB16D] focus:outline-none ${
                      errors.Email ? "border-[#FD6B6D] shadow-[0_0_1px_1px_#F4A2A2]" : ""
                    }`}
                  />
                </div>
                {errors.Email && (
                  <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake">
                    {errors.Email}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-5">
              <div className="py-[7px] break-words">Description</div>
              <div className={`relative text-left break-words border-0 ${errors.Description ? "animate-shake" : ""}`}>
                <div className="relative flex flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6a6a] rounded-l-[4px] z-[2]"></div>
                  <textarea
                    name="Description"
                    maxLength={32000}
                    value={formData.Description}
                    onChange={handleChange}
                    className={`w-full border border-[#BDC8D3] rounded-[4px] p-[10px_15px] min-h-[100px] max-h-[200px] text-[15px] font-inherit resize-y focus:border-[#1AB16D] focus:outline-none ${
                      errors.Description ? "border-[#FD6B6D] shadow-[0_0_1px_1px_#F4A2A2]" : ""
                    }`}
                  />
                </div>
                {errors.Description && (
                  <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake">
                    {errors.Description}
                  </div>
                )}
              </div>
            </div>

            {errors.submit && (
              <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake mb-5">
                {errors.submit}
              </div>
            )}

            <div className="flex mt-10 items-center justify-end flex-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-5 py-2.5 rounded-[4px] text-[15px] cursor-pointer font-bold font-inherit transition-all duration-300 bg-[#1AB16D] text-white border border-[#1AB16D] ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
