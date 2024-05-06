import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be more than 3 characters")
    .max(30, "Name must under 30 characters")
    .required("Name is required"),
  year: Yup.string().required("Enter Year"),
  college: Yup.string()
    .min(10, "College must be more than 10 characters")
    .max(50, "College should not exceed 50 characters")
    .required("Enter your college"),
  email: Yup.string().required("Enter your email").email("Enter valid email"),
  phone_no: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone Number is required"),
});
