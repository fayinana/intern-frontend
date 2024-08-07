import MultiStepForm from "./MultiStepForm";

// step 1
// title
// discription
// GiPriceTag
// step 2
// numofbed
// mo of bath
// area

// step 3
// feature
// rule
// step 4
// map
// step 5
// how many
// image
// property
// last year prepary tax

//  valid id

const steps = [
  {
    name: "user identity",
    inputs: [
      { label: "title", type: "text", fieldName: "title" },
      { label: "description", type: "textarea", fieldName: "description" },
      { label: "price", type: "number", fieldName: "price" },
    ],
  },
  {
    name: "property detail",
    inputs: [
      { label: "number of bedrooms", type: "number", fieldName: "bedroom" },
      { label: "number of bath room", type: "number", fieldName: "bathroom" },
      { label: "square area(met)", type: "number", fieldName: "area" },
    ],
  },
  {
    name: "property detail",
    inputs: [
      { label: "features", type: "text", fieldName: "features" },
      { label: "rule", type: "textarea", fieldName: "rule" },
    ],
  },
  {
    name: "property detail",
    inputs: [
      { label: "image", type: "file", fieldName: "image" },
      { label: "property file", type: "file", fieldName: "property_file" },
      {
        label: "Property tax payment",
        type: "file",
        fieldName: "Property_tax_payment",
      },
      { label: "valid id", type: "file", fieldName: "valid_id" },
    ],
  },
];

const handleFormSubmit = (data) => {
  console.log("Form data:", data);
};
function PropertyForm() {
  return <MultiStepForm steps={steps} onSubmit={handleFormSubmit} />;
}

export default PropertyForm;

// import MultiStepForm from "./components/MultiStepForm";

// const steps = [
//   {
//     name: "user identity",
//     inputs: [
//       { label: "Name", type: "text", fieldName: "name" },
//       { label: "Email", type: "email", fieldName: "email" },
//     ],
//   },
//   {
//     name: "property detail",
//     inputs: [
//       { label: "Address", type: "text", fieldName: "address" },
//       { label: "Phone", type: "tel", fieldName: "phone" },
//     ],
//   },
//   {
//     name: "property detail",
//     inputs: [
//       { label: "Address", type: "text", fieldName: "address" },
//       { label: "Phone", type: "tel", fieldName: "phone" },
//     ],
//   },
//   {
//     name: "property detail",
//     inputs: [
//       { label: "Address", type: "text", fieldName: "address" },
//       { label: "Phone", type: "tel", fieldName: "phone" },
//     ],
//   },
// ];

// user side

// profile
// fevorite
//
