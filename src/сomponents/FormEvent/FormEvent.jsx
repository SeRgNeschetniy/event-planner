import { Formik, Field } from "formik";
import {
  Button,
  ButtonClear,
  Error,
  FieldWrapp,
  FormBody,
  FormFooter,
  FormWrapp,
  Input,
  Label,
  Textarea,
} from "./FormEvent.styled";
import { createEvent, editEvent, getEventById } from "API/API";
import { uploadImageToServer } from "API/uploadImageToServer";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputSelect } from "./InputSelect/InputSelect";
import { categories, priorities } from "helpers/variables";
import { InputDate } from "./InputDate/InputDate";

const IconClear = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 8L8 16M8.00003 8L16 16"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const FormEvent = ({ type }) => {
  const navigate = useNavigate();
  const toHome = () => navigate("/");

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState("");
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    img: "",
    priority: "",
  });

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchEvent = async () => {
      setIsLoading(true);
      try {
        const result = await getEventById(id);
        setEvent(result);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchEvent();
  }, [id]);

  const initialValues = {
    ...event,
  };

  console.log(initialValues);

  return (
    !isLoading && (
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};

          if (!values.title) {
            errors.title = "Required";
          }

          if (!values.description) {
            errors.description = "Required";
          }

          if (!values.location) {
            errors.location = "Required";
          }

          if (!values.category && values.category !== "Select Category") {
            errors.category = "Required";
          }

          if (!values.priority && values.priority !== "Select Priority") {
            errors.priority = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            if (type === "create") {
              (async () => {
                const uploadImage = await uploadImageToServer(
                  "Events",
                  URL.createObjectURL(image)
                );
                values.img = uploadImage;
                await createEvent(values).finally(() => {
                  resetForm();
                  toHome();
                });
              })();
            }

            if (type === "edit") {
              (async () => {
                await editEvent(id, values).finally(() => {
                  resetForm();
                  toHome();
                });
              })();
            }

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          setFieldValue,
          handleChange,
          handleBlur,
          isSubmitting,
          values,
        }) => (
          <FormWrapp>
            <FormBody>
              <FieldWrapp>
                <Label htmlFor="title">Title</Label>
                <Input
                  name="title"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ButtonClear
                  type="button"
                  onClick={(e) => {
                    setFieldValue("title", "");
                  }}
                >
                  <IconClear />
                </ButtonClear>
                <Error name="title" component="div" />
              </FieldWrapp>
              <FieldWrapp>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  type="text"
                  name="description"
                  as="textarea"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ButtonClear
                  type="button"
                  onClick={(e) => {
                    setFieldValue("description", "");
                  }}
                >
                  <IconClear />
                </ButtonClear>
                <Error name="description" component="div" />
              </FieldWrapp>
              {/* <FieldWrapp>
                <Label htmlFor="date">Select date</Label>
                <Input type="date" name="date" />
                <Error name="date" id="date" component="div" />
              </FieldWrapp> */}

              <Field name="date">
                {({ field, form, meta }) => (
                  <InputDate
                    field={field}
                    form={form}
                    meta={meta}
                    label={"Date"}
                  />
                )}
              </Field>

              <FieldWrapp>
                <Label htmlFor="time">Select time</Label>
                <Input type="time" id="time" name="time" />
                <Error name="time" component="div" />
              </FieldWrapp>
              <FieldWrapp>
                <Label htmlFor="location">Location</Label>
                <Input name="location" id="location" />
                <ButtonClear
                  type="button"
                  onClick={(e) => {
                    setFieldValue("location", "");
                  }}
                >
                  <IconClear />
                </ButtonClear>
                <Error name="location" component="div" />
              </FieldWrapp>

              <Field name="category">
                {({ field, form, meta }) => (
                  <InputSelect
                    field={field}
                    form={form}
                    meta={meta}
                    label={"Category"}
                    options={categories}
                  />
                )}
              </Field>

              <FieldWrapp>
                <Label htmlFor="file">Add file</Label>
                <Input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(event) => {
                    setImage(event.currentTarget.files[0]);
                  }}
                />
                <Error name="file" component="div" />
              </FieldWrapp>

              <Field name="priority">
                {({ field, form, meta }) => (
                  <InputSelect
                    field={field}
                    form={form}
                    meta={meta}
                    label={"Priority"}
                    options={priorities}
                  />
                )}
              </Field>
            </FormBody>
            <FormFooter>
              <Button type="submit" disabled={isSubmitting}>
                {type === "create" && "Add event"}
                {type === "edit" && "Save"}
              </Button>
            </FormFooter>
          </FormWrapp>
        )}
      </Formik>
    )
  );
};
