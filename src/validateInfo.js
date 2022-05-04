export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.surname.trim()) {
    errors.surname = "Surname required";
  }

  if (!values.image.trim()) {
    errors.image = "Image URL required";
  }

  if (!values.biography.trim()) {
    errors.biography = "Biogrpahy required";
  }

  return errors;
}
