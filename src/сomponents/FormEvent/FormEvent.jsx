import { Formik, Form, Field, ErrorMessage } from "formik";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { InputSelect } from "./InputSelect/InputSelect";
import { categories, priorities } from "data/variables";
import * as Yup from "yup";

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

export const FormEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const [showCategories, setShowCategories] = useState(false);

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

  // const validationSchema = Yup.object({
  //   title: Yup.string().required(),
  //   description: Yup.string().required(),
  //   date: Yup.string().required(),
  //   time: Yup.string().required(),
  //   location: Yup.string().required(),
  //   category: Yup.string().required(),
  //   img: Yup.string().url(),
  //   priority: Yup.number().required(),
  // });

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
        onSubmit={(values, { setSubmitting, setFieldValue }) => {
          setTimeout(() => {
            console.log("values----", values);

            // (async () => {
            //   const uploadImage = await uploadImageToServer(
            //     "Events",
            //     URL.createObjectURL(image)
            //   );
            //   values.img = uploadImage;
            //   //setFieldValue("img", uploadImage);
            //   await createEvent(values);
            // })();

            (async () => {
              await editEvent(id, values);
            })();

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
              <FieldWrapp>
                <Label htmlFor="date">Select date</Label>
                <Input type="date" name="date" />
                <Error name="date" id="date" component="div" />
              </FieldWrapp>
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

              {/* <FieldWrapp>
              <Label htmlFor="category">Category</Label>
              <Select
                name="category"
                id="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value=""></option>
                <option value="Art">Art</option>
                <option value="Music">Music</option>
                <option value="Business">Business</option>
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Party">Party</option>
                <option value="Sport">Sport</option>
              </Select>

              <Error name="category" component="div" />
            </FieldWrapp> */}

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

              {/* <FieldWrapp>
              <Label htmlFor="priority">Priority</Label>
              <Select
                name="priority"
                id="priority"
                value={values.priority}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value=""></option>
                <option value="High" selected>
                  High
                </option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Select>
              <Error name="priority" component="div" />
            </FieldWrapp> */}
            </FormBody>
            <FormFooter>
              <Button type="submit" disabled={isSubmitting}>
                Add event
              </Button>
            </FormFooter>
          </FormWrapp>
        )}
      </Formik>
    )
  );
};
