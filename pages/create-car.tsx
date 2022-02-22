import Head from "next/head";
import carStore from "../store/carStore";
import { NextPage } from "next";
import {
  Block,
  BlockImage,
  Button,
  CeckboxSection,
  CheckboxLabel,
  Container,
  File,
  FileLabel,
  FormBlock,
  Input,
  Label,
  RowBlock,
  Text,
} from "../styles/create-car";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { ICar } from "../types/cars";
import { ChangeEvent, useRef } from "react";

const CreateCar: NextPage = () => {
  const formikRef = useRef<FormikProps<ICar>>(null);

  const submitHandler = (
    values: ICar,
    { setSubmitting, resetForm }: FormikHelpers<ICar>
  ) => {
    carStore.addCarInStore(values);
    resetForm();
    setSubmitting(false);
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
      <Container imgUrl="/img/image-2.png">
        <Formik
          innerRef={formikRef}
          initialValues={carStore.car}
          onSubmit={submitHandler}
        >
          {({ values }) => (
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
                  <Input name="name" />
                </section>
                <RowBlock>
                  <section>
                    <Label htmlFor="price">Price</Label>
                    <Input name="price" type="number" />
                  </section>
                  <section>
                    <Label htmlFor="speed">Speed</Label>
                    <Input name="speed" type="number" />
                  </section>
                  <section>
                    <Label htmlFor="reserve">Reserve</Label>
                    <Input name="reserve" type="number" />
                  </section>
                </RowBlock>
                <section>
                  <Label htmlFor="description">Description</Label>
                  <Input name="description" type="text" />
                </section>
                <CeckboxSection>
                  <CheckboxLabel htmlFor="used">
                    <p>Used</p>
                    <Input name="used" id="used" type="checkbox" />
                  </CheckboxLabel>
                </CeckboxSection>
                {values.used && (
                  <section>
                    <Label htmlFor="mileage">Mileage</Label>
                    <Input name="mileage" type="number" />
                  </section>
                )}
                <section>
                  <FileLabel htmlFor="file">
                    <File
                      name="image"
                      id="image"
                      type="file"
                      onChange={changeFiles}
                    />
                    <span>Upload</span>
                  </FileLabel>
                </section>
                <section>
                  <Button>Create car</Button>
                </section>
              </FormBlock>
            </Block>
          )}
        </Formik>
      </Container>
      ;
    </>
  );
};

export default CreateCar;
