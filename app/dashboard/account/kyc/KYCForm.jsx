import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import Msg from "@/components/Msg";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const genders = [
  "Male",
  "Female",
  "Non-binary",
  "Genderqueer",
  "Genderfluid",
  "Agender",
  "Bigender",
  "Pangender",
  "Androgynous",
  "Two-Spirit",
  "Demiboy",
  "Demigirl",
  "Transgender Male",
  "Transgender Female",
  "Cisgender Male",
  "Cisgender Female",
  "Intersex",
  "Other",
  "Prefer not to say",
];
const identifications = ["Drivers License", "National ID", "Passport"];
const imageTypes = ["image/jpeg", "image/png", "image/jpg"];

export default function KYCForm({ handleFormSubmit }) {
  const [formData, setFormData] = useState({
    identificationMethod: "",
    identificationImage: "",
    address: "",
    nationality: "",
    gender: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleKYCFormSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    await handleFormSubmit(formData, handleSuccess, handleError);
    setIsSubmitting(false);
  }

  function handleFormDataChange(e, value) {
    if (typeof e === "object" && e !== null) {
      setFormData((pfd) => ({
        ...pfd,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFormData((pfd) => ({
        ...pfd,
        [e]: value,
      }));
    }
  }

  function handleError(msg = "An error occured", delay = 2000) {
    setError(msg);
    setTimeout(() => setError(""), delay);
  }
  function handleSuccess(msg = "Operation successful", delay = 2000) {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), delay);
  }

  function handleFileToBase64(e) {
    const imageFile = e.target.files[0];
    if (!imageTypes.includes(imageFile.type)) {
      return handleError("Invalid Image. Only JPG and PNG are supported");
    }

    if (imageFile.size / 1024 > 1024) {
      return handleError("Image must be less than 1mb.");
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFormData((pfd) => ({ ...pfd, identificationImage: reader.result }));
    });
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <form className="flex flex-col gap-5 my-2" onSubmit={handleKYCFormSubmit}>
      <Select
        name="identificationMethod"
        value={formData["identificationMethod"]}
        onValueChange={(value) =>
          handleFormDataChange("identificationMethod", value)
        }
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a verification method" />
        </SelectTrigger>
        <SelectContent>
          {identifications.map((method, _) => (
            <SelectItem value={method} key={method + _}>
              {method}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        {formData.identificationImage && (
          <img
            src={formData.identificationImage}
            alt="Identification Image"
            className="text-center mx-auto"
            width={100}
            height={100}
          />
        )}

        <Label htmlFor="identificationImage">Identification Image</Label>
        <Input
          id="identificationImage"
          name="identificationImage"
          onChange={handleFileToBase64}
          type="file"
          accept={imageTypes.join(", ")}
          className="py-10"
          // placeholder="click to upload image"
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          onChange={handleFormDataChange}
          type="text"
          placeholder="Where you live"
          required
        />
      </div>
      {/* <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="nationality">Nationality</Label>
        <Input
          id="nationality"
          name="nationality"
          type="text"
          placeholder="Your nation"
        />
      </div> */}

      <Select
        name="nationality"
        value={formData["nationality"]}
        onValueChange={(value) => handleFormDataChange("nationality", value)}
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Select your nationality" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country, _) => (
            <SelectItem value={country} key={country + _}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        name="gender"
        value={formData["gender"]}
        onValueChange={(value) => handleFormDataChange("gender", value)}
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Select your gender" />
        </SelectTrigger>
        <SelectContent>
          {genders.map((gender, _) => (
            <SelectItem value={gender} key={gender + _}>
              {gender}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Msg msg={error} type="error" />
      <Msg msg={success} type="success" />
      <Button
        onClick={handleKYCFormSubmit}
        className="flex gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting && <Loader />}
        Verify
      </Button>
    </form>
  );
}
