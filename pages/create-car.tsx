import Head from "next/head";
import carStore from "../store/carStore";
import { ImCheckmark } from "react-icons/im";
import { FiUpload } from "react-icons/fi";
import { NextPage } from "next";
import { ErrorMessage, Formik, FormikHelpers, FormikProps } from "formik";
import { ICar } from "../types/cars";
import { ChangeEvent, useRef } from "react";
import { validationSchemaCreate } from "../utils";
import {
  Block,
  BlockImage,
  Button,
  CeckboxSection,
  CheckboxLabel,
  Container,
  Error,
  File,
  FileLabel,
  FormBlock,
  Input,
  Label,
  RowBlock,
  Text,
} from "../styles/create-car";
import { NextRouter, useRouter } from "next/router";
import { WebsiteUrls } from "../types/enums";

const CreateCar: NextPage = () => {
  const formikRef = useRef<FormikProps<ICar>>(null);
  const router: NextRouter = useRouter();

  const submitHandler = (
    values: ICar,
    { setSubmitting, resetForm }: FormikHelpers<ICar>
  ) => {
    resetForm();
    carStore.addCarInStore(values);
    setSubmitting(false);
    router.push(WebsiteUrls.HOME);
  };

  const changeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    formikRef.current &&
      formikRef.current.setFieldValue("file", e.target.files);
  };

  return (
    <>
      <Head>
        <title>Create page</title>
      </Head>

      <Container imgUrl="/polar-2.jpeg">
        <Formik
          validationSchema={validationSchemaCreate}
          innerRef={formikRef}
          initialValues={carStore.car}
          onSubmit={submitHandler}
          validateOnBlur
        >
          {({ values, handleChange, handleBlur, handleSubmit, isValid }) => (
            <Block>
              <BlockImage image="/images/solar-panel.jpg">
                <p>
                  Tesla’s mission is to accelerate the world’s transition to
                  sustainable energy.
                </p>
              </BlockImage>
              <FormBlock>
                <Text>Ride Free - This is our motto</Text>
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
                  <FileLabel htmlFor="file">
                    <File
                      onBlur={handleBlur}
                      name="image"
                      id="image"
                      type="file"
                      onChange={changeFiles}
                    />
                    <span>
                      {values.file[0] ? (
                        <ImCheckmark size={20} />
                      ) : (
                        <FiUpload size={20} />
                      )}
                    </span>
                  </FileLabel>
                </section>
                <section>
                  <Button
                    onClick={handleSubmit}
                    disabled={!isValid}
                    type="submit"
                  >
                    Create
                  </Button>
                </section>
              </FormBlock>
            </Block>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateCar;
