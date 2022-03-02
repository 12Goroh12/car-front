import { Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { TestDrive } from "../../types/formik";
import { initialValues, validationSchemaModal } from "../../utils";
import {
  Block,
  Button,
  CloseModal,
  Error,
  FormBlock,
  Input,
  ModalForm,
  Wrapper,
} from "./style";

interface IModalProps {
  setModal: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const Modal: FC<IModalProps> = ({ setModal }) => {
  const submit = (
    values: TestDrive,
    { setSubmitting, resetForm }: FormikHelpers<TestDrive>
  ) => {
    resetForm();
    setSubmitting(false);
    setModal(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Wrapper>
      <ModalForm>
        <CloseModal onClick={closeModal}>
          <RiCloseCircleFill size={30} />
        </CloseModal>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaModal}
          validateOnBlur
          onSubmit={submit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
          }) => (
            <FormBlock>
              <Block>
                <label htmlFor="name">Name:</label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  type="text"
                  name="name"
                  placeholder="Enter yuor name"
                />
              </Block>
              <span>
                {touched.name && errors.name && <Error>{errors.name}</Error>}
              </span>
              <Block>
                <label htmlFor="email">Email:</label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  name="email"
                  placeholder="john@acme.com"
                />
              </Block>
              <span>
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </span>
              <Block>
                <label htmlFor="name">Phone:</label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  type="tel"
                  name="phone"
                  placeholder="375 29 000-00-00"
                />
              </Block>
              <span>
                {touched.phone && errors.phone && <Error>{errors.phone}</Error>}
              </span>
              <Button type="submit" disabled={!isValid} onClick={handleSubmit}>
                Test Drive
              </Button>
            </FormBlock>
          )}
        </Formik>
      </ModalForm>
    </Wrapper>
  );
};

export default Modal;
