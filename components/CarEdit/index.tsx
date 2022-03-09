import axios from "axios";
import carStore from "../../store/carStore";
import { ErrorMessage, Formik, FormikHelpers } from "formik";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  Block,
  FormBlock,
  Input,
  Label,
  Text,
  Error,
  RowBlock,
  CeckboxSection,
  CheckboxLabel,
  Button,
  Close,
} from "./style";
import { ICar } from "../../types/cars";
import { BaseUrl, WebsiteUrls } from "../../types/enums";
import { validationSchemaCreate } from "../../utils";
import { Wrapper } from "./style";
import { RiCloseCircleFill } from "react-icons/ri";
import { NextRouter, useRouter } from "next/router";

interface ICarEditProps {
  carId: string;
  setEditForm: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const CarEdit: FC<ICarEditProps> = ({ carId, setEditForm }) => {
  const [car, setCar] = useState<ICar>();
  const router: NextRouter = useRouter();
  const editRef = useRef<HTMLDivElement>(null);

  const submit = async (
    values: ICar,
    { setSubmitting, resetForm }: FormikHelpers<ICar>
  ) => {
    try {
      await axios.put(`${BaseUrl.URL}cars/edit/${carId}`, values);
      carStore.getCarsInStore();
      setSubmitting(false);
      resetForm();
      setEditForm(false);
      router.push(WebsiteUrls.NEW_ADN_USED);
    } catch (error) {
      console.log(error);
    }
  };

  const closeEditForm = () => {
    setEditForm(false);
  };

  const handleOutsideClick = useCallback(
    (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(editRef.current)) {
        setEditForm(false);
      }
    },
    [setEditForm]
  );

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    async function fetchDetailCar() {
      try {
        const { data } = await axios.get(`${BaseUrl.URL}cars/details/${carId}`);
        setCar(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetailCar();
  }, []);

  return (
    <Wrapper ref={editRef}>
      <Formik
        initialValues={{
          name: car?.name || "",
          price: car?.price || null,
          description: car?.description || "",
          speed: car?.speed || null,
          reserve: car?.reserve || null,
          used: car?.used || false,
          file: car?.file || [],
          _id: car?._id || "",
        }}
        enableReinitialize
        validationSchema={validationSchemaCreate}
        validateOnBlur
        onSubmit={submit}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isValid }) => (
          <Block>
            <Close onClick={closeEditForm}>
              <RiCloseCircleFill size={30} />
            </Close>
            <FormBlock>
              <Text>To change the data</Text>
              <section>
                <Label htmlFor="name">Name</Label>
                <Input
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                  id="name"
                  type="text"
                />
                <ErrorMessage name="name">
                  {(msg: string) => <Error>{msg}</Error>}
                </ErrorMessage>
              </section>
              <RowBlock>
                <section>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="price"
                    id="price"
                    type="number"
                  />
                  <ErrorMessage name="price">
                    {(msg: string) => <Error>{msg}</Error>}
                  </ErrorMessage>
                </section>
                <section>
                  <Label htmlFor="speed">Speed</Label>
                  <Input
                    value={values.speed}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="speed"
                    id="speed"
                    type="number"
                  />
                  <ErrorMessage name="speed">
                    {(msg: string) => <Error>{msg}</Error>}
                  </ErrorMessage>
                </section>
                <section>
                  <Label htmlFor="reserve">Reserve</Label>
                  <Input
                    value={values.reserve}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="reserve"
                    id="reserve"
                    type="number"
                  />
                  <ErrorMessage name="reserve">
                    {(msg: string) => <Error>{msg}</Error>}
                  </ErrorMessage>
                </section>
              </RowBlock>
              <section>
                <Label htmlFor="description">Description</Label>
                <Input
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="description"
                  type="text"
                />
                <ErrorMessage name="description">
                  {(msg: string) => <Error>{msg}</Error>}
                </ErrorMessage>
              </section>
              <CeckboxSection>
                <CheckboxLabel htmlFor="used">
                  <p>Used</p>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="used"
                    id="used"
                    type="checkbox"
                  />
                  <ErrorMessage name="used">
                    {(msg: string) => <Error>{msg}</Error>}
                  </ErrorMessage>
                </CheckboxLabel>
              </CeckboxSection>
              {values.used && (
                <section>
                  <Label htmlFor="mileage">Mileage</Label>
                  <Input
                    value={values.mileage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="mileage"
                    id="mileage"
                    type="number"
                  />
                  <ErrorMessage name="mileage">
                    {(msg: string) => <Error>{msg}</Error>}
                  </ErrorMessage>
                </section>
              )}
              <section>
                <Button
                  onClick={() => handleSubmit()}
                  disabled={!isValid}
                  type="submit"
                >
                  Save
                </Button>
              </section>
            </FormBlock>
          </Block>
        )}
      </Formik>
    </Wrapper>
  );
};

export default CarEdit;
